"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: Message = {
  role: "assistant",
  content:
    "Hi! I'm Kaizen's AI assistant. Ask me anything about our laser marking machines, applications, or how to reach our team. How can I help you?",
};

// Renders bold (**text**) inline within a text segment
function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// Simple markdown renderer: bold, bullet lists, numbered lists, paragraphs
function MarkdownMessage({ content }: { content: string }) {
  const lines = content.split("\n");
  const blocks: React.ReactNode[] = [];
  const listBuffer: { ordered: boolean; items: string[] } = { ordered: false, items: [] };

  function flushList(key: number) {
    if (listBuffer.items.length === 0) return;
    const Tag = listBuffer.ordered ? "ol" : "ul";
    blocks.push(
      <Tag key={key} className={listBuffer.ordered ? "ml-4 mt-1 list-decimal space-y-0.5" : "ml-4 mt-1 list-disc space-y-0.5"}>
        {listBuffer.items.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed">
            <InlineText text={item} />
          </li>
        ))}
      </Tag>
    );
    listBuffer.items = [];
  }

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    const bulletMatch = trimmed.match(/^[-•*]\s+(.+)/);
    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)/);

    if (bulletMatch) {
      if (listBuffer.ordered) { flushList(idx); listBuffer.ordered = false; }
      listBuffer.items.push(bulletMatch[1]);
    } else if (orderedMatch) {
      if (!listBuffer.ordered && listBuffer.items.length > 0) flushList(idx);
      listBuffer.ordered = true;
      listBuffer.items.push(orderedMatch[1]);
    } else {
      flushList(idx);
      if (trimmed === "") {
        // skip extra blank lines between blocks
      } else {
        blocks.push(
          <p key={idx} className="text-sm leading-relaxed">
            <InlineText text={trimmed} />
          </p>
        );
      }
    }
  });

  flushList(lines.length);

  return <div className="flex flex-col gap-1.5">{blocks}</div>;
}

// Blinking cursor shown while streaming
function Cursor() {
  return (
    <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-current align-middle opacity-70" />
  );
}

export function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);   // waiting for first chunk
  const [streaming, setStreaming] = useState(false); // receiving chunks
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading || streaming) return;

    const userMsg: Message = { role: "user", content: text };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.filter((m) => m !== WELCOME),
        }),
      });

      if (!res.ok || !res.body) throw new Error("Bad response");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      // Add empty assistant placeholder and switch to streaming mode
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      setLoading(false);
      setStreaming(true);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }
    } catch {
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Connection error. Please try again or call us at +91 79066 13074.",
        },
      ]);
    } finally {
      setLoading(false);
      setStreaming(false);
    }
  }

  const busy = loading || streaming;
  const lastIsAssistant = messages[messages.length - 1]?.role === "assistant";

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col rounded-2xl border border-border bg-background shadow-2xl sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-accent px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1">
                <Image src="/logo.png" alt="Kaizen Laser" width={48} height={16} className="h-auto w-full object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold text-accent-foreground">Kaizen AI Assistant</p>
                <p className="text-xs text-accent-foreground/70">Ask about our machines &amp; services</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-accent-foreground/80 hover:text-accent-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex max-h-80 flex-col gap-3 overflow-y-auto p-4">
            {messages.map((msg, i) => {
              const isLastAssistant = msg.role === "assistant" && i === messages.length - 1 && lastIsAssistant;
              return (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                      msg.role === "user"
                        ? "bg-accent text-accent-foreground"
                        : "bg-surface-2 text-foreground"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    ) : (
                      <>
                        <MarkdownMessage content={msg.content} />
                        {isLastAssistant && streaming && <Cursor />}
                      </>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Thinking indicator — pulsing logo while waiting for first chunk */}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2.5 rounded-2xl bg-surface-2 px-3 py-2.5">
                  <div className="animate-pulse rounded-full bg-white p-1.5 shadow-sm">
                    <Image src="/logo.png" alt="Kaizen Laser thinking" width={56} height={20} className="h-4 w-auto object-contain" />
                  </div>
                  <span className="text-xs text-muted-foreground">Thinking…</span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border p-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              placeholder="Ask about machines, pricing…"
              className="flex-1 rounded-xl bg-surface-2 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-accent"
              maxLength={300}
              disabled={busy}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || busy}
              aria-label="Send message"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground transition hover:opacity-90 disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close AI chat" : "Open AI chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition hover:opacity-90 active:scale-95"
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </>
  );
}
