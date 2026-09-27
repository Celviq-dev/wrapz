const items = [
  { icon: "✽", text: "Handcrafted in India" },
  { icon: "◆", text: "Fully personalized" },
  { icon: "❖", text: "Wedding & festival edits" },
  { icon: "✦", text: "Corporate at scale" },
];

export function TrustBar() {
  return (
    <div className="border-y border-beige/70 bg-warm-white">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6 md:justify-between md:py-5">
          {items.map((i) => (
            <div key={i.text} className="flex items-center gap-3 text-sm text-warm-gray">
              <span className="text-olive text-base leading-none">{i.icon}</span>
              <span className="font-medium">{i.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
