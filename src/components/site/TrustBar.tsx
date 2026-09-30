import { Gift, Star, Truck, Users } from "lucide-react";
import { SITE } from "@/data/site";

const FACTS = [
  { icon: Users, label: `${SITE.customers.toLocaleString("en-IN")}+ happy customers` },
  { icon: Star, label: `${SITE.reviews}+ Google reviews`, href: SITE.reviewsUrl },
  { icon: Gift, label: "Hand-wrapped in Hyderabad" },
  { icon: Truck, label: "Delivered pan-India" },
];

export function TrustBar() {
  return (
    <section aria-label="Why families and companies choose us" className="border-b border-line bg-porcelain">
      <ul className="page-x grid grid-cols-2 gap-y-1 py-4 md:grid-cols-4 md:divide-x md:divide-line md:py-5">
        {FACTS.map(({ icon: Icon, label, href }) => {
          const body = (
            <>
              <Icon aria-hidden strokeWidth={1.5} className="size-[18px] shrink-0 text-gold-deep" />
              <span className="tabular-nums">{label}</span>
            </>
          );
          return (
            <li key={label} className="flex justify-center">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2.5 px-2 text-[13px] font-medium text-ink underline decoration-line underline-offset-4 transition-colors duration-150 hover:decoration-ink md:text-sm"
                >
                  {body}
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center gap-2.5 px-2 text-[13px] font-medium text-ink md:text-sm">{body}</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
