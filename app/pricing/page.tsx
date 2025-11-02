const plans = [
  {
    name: "Alpha Plan",
    price: "$5.99",
    description: "Lock in early pricing for life and help shape the roadmap.",
    perks: ["Unlimited subtitle playback", "Point multipliers during alpha", "Founding badge for your profile"]
  },
  {
    name: "Supporter Kit",
    price: "$6.99",
    highlight: true,
    description: "Show extra love for the community and unlock exclusive perks.",
    perks: ["Private Discord lounge", "Golden supporter badge", "Extra voting credits every month"]
  },
  {
    name: "Extra Credits",
    price: "Add-on",
    description: "Boost translation timelines or fund new subtitle drops.",
    perks: ["Prioritized subtitle requests", "Gift credits to friends", "Track usage transparently"]
  }
];

export default function PricingPage() {
  return (
    <section className="section">
      <h1>Transparent Pricing</h1>
      <p className="muted">
        Choose the plan that fits your learning journey. All memberships are
        backed by secure Stripe checkout.
      </p>
      <div className="pricing-grid" style={{ marginTop: "32px" }}>
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`glass-card pricing-card${plan.highlight ? " highlight" : ""}`}
          >
            <h2>{plan.name}</h2>
            <p className="muted">{plan.description}</p>
            <p style={{ fontSize: "2rem", margin: "24px 0" }}>{plan.price}</p>
            <ul className="grid">
              {plan.perks.map((perk) => (
                <li key={perk} className="muted">
                  {perk}
                </li>
              ))}
            </ul>
            <button type="button" className="primary-cta" style={{ marginTop: "24px" }}>
              Choose Plan
            </button>
            <p className="muted" style={{ marginTop: "16px", fontSize: "0.9rem" }}>
              Secure Checkout · Powered by Stripe
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
