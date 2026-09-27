import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { HamperWizard } from "@/components/site/HamperWizard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/build-hamper")({
  head: () => ({
    meta: [
      { title: "Build a Hamper — Bespoke Gifting | Sneha Wrapzz" },
      { name: "description", content: "A seven-step guided journey to build your own curated hamper — occasion, recipient, budget, theme, packaging, personalization, and quantity." },
      { property: "og:title", content: "Build Your Own Hamper — Sneha Wrapzz" },
      { property: "og:description", content: "A guided seven-step journey to your bespoke hamper. We respond within one working day." },
      { property: "og:url", content: "https://snehawrapzz.lovable.app/build-hamper" },
    ],
    links: [{ rel: "canonical", href: "https://snehawrapzz.lovable.app/build-hamper" }],
  }),
  component: BuildHamperPage,
});

function BuildHamperPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Build a Hamper" }]}
        eyebrow="Bespoke"
        title="Build your"
        italic="hamper."
        description="Answer seven quick questions. Our gifting concierge responds within one working day with two or three curated hamper concepts."
      />

      <section className="pb-24 md:pb-32 bg-ivory">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <HamperWizard />
          </Reveal>
        </div>
      </section>
    </>
  );
}
