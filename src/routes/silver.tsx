import { createFileRoute } from "@tanstack/react-router";
import { PillarPage, pillarHead } from "@/components/site/PillarPage";

export const Route = createFileRoute("/silver")({
  head: () =>
    pillarHead(
      "silver",
      "Silver Idols, Wall Art & Décor Gifts — Sneha’s Wrapzz",
      "Silver-finish idols in acrylic cases, relief wall art, peacocks, swans, elephants, clocks and Shubh-Labh sets. Gift-wrapped in Hyderabad, delivered pan-India.",
    ),
  component: SilverPage,
});

function SilverPage() {
  return (
    <PillarPage
      pillarKey="silver"
      title="Silver artifacts,"
      italic="made to be kept."
      description="Idols, relief art, animal décor, clocks and ritual pieces in a silver finish, many presented in acrylic display cases or velvet boxes. Ideal for griha pravesh, weddings, Diwali and client gifting."
      formTitle="Enquire about silver gifting"
    />
  );
}
