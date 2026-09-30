import { createFileRoute } from "@tanstack/react-router";
import { PillarPage, pillarHead } from "@/components/site/PillarPage";

export const Route = createFileRoute("/home-decor")({
  head: () =>
    pillarHead(
      "home",
      "Home & Table Décor Gifts: Trays, Bowls & Jars — Sneha’s Wrapzz",
      "Dry-fruit bowls, painted and mirror trays, cloches, jar sets, goblets and bottle holders. Gift-boxed in Hyderabad for housewarmings, Diwali and hosting.",
    ),
  component: HomeDecorPage,
});

function HomeDecorPage() {
  return (
    <PillarPage
      pillarKey="home"
      title="For the table,"
      italic="and every guest at it."
      description="Dry-fruit bowls, painted trays, cloches, jar sets and drinkware, gift-boxed for housewarmings, festive hosting and thank-yous."
      formTitle="Enquire about home & table gifts"
    />
  );
}
