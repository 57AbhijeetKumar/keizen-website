import { LeadForm } from "@/components/forms/lead-form";

/** Used on product detail pages — tags the lead with the product so sales has context. */
export function EnquiryForm({ productSlug, productName }: { productSlug: string; productName: string }) {
  return (
    <LeadForm
      source="product-enquiry"
      productSlug={productSlug}
      submitLabel="Request a quote"
      successTitle="Enquiry received"
      successDescription={`Thanks — our team will reach out about the ${productName} shortly.`}
    />
  );
}
