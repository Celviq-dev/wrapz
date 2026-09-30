import { createFileRoute } from "@tanstack/react-router";
import { PillarPage, pillarHead } from "@/components/site/PillarPage";

export const Route = createFileRoute("/pooja")({
  head: () =>
    pillarHead(
      "pooja",
      "Pooja Thalis & Ganesh-Lakshmi Gift Sets — Sneha’s Wrapzz",
      "Pooja thali sets, Ganesh-Lakshmi and Shubh-Labh boxes and pooja essentials in velvet and satin-lined presentation boxes. Hand-packed in Hyderabad.",
    ),
  component: PoojaPage,
});

function PoojaPage() {
  return (
    <PillarPage
      pillarKey="pooja"
      title="Pooja essentials,"
      italic="beautifully presented."
      description="Thali sets with bell, diya and katoris, and Ganesh-Lakshmi boxes in velvet and satin-lined presentation boxes, ready for Diwali, griha pravesh and festive gifting."
      formTitle="Enquire about pooja sets"
    />
  );
}
