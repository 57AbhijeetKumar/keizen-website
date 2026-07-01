import { AnimatedSection } from "@/components/shared/animated-section";
import { ValueProps, type ValueProp } from "@/components/sections/value-props";

interface WhyChooseUsProps {
  heading: string;
  description?: string;
  items: ValueProp[];
}

export function WhyChooseUs({ heading, description, items }: WhyChooseUsProps) {
  return (
    <section className="container-page py-20 sm:py-28">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <h2 className="text-section font-heading font-semibold">{heading}</h2>
        {description ? (
          <p className="mt-4 text-muted-foreground">{description}</p>
        ) : null}
      </AnimatedSection>
      <div className="mt-12">
        <ValueProps items={items} />
      </div>
    </section>
  );
}
