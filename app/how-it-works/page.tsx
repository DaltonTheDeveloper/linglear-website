const steps = [
  "Install the browser extension and create your profile",
  "Watch and learn with interactive bilingual subtitles",
  "Vote for the next translation drops and track progress",
  "Earn points by helping others with reviews and feedback",
  "Practice vocabulary with the built-in spaced repetition",
  "Grow the community by inviting friends and study buddies"
];

const comparison = [
  { feature: "Interactive shows", linglear: "✔", duolingo: "–", reactor: "✔" },
  { feature: "Community voting", linglear: "✔", duolingo: "–", reactor: "–" },
  { feature: "Low-cost ML translations", linglear: "✔", duolingo: "✔", reactor: "–" },
  { feature: "Gamified points", linglear: "✔", duolingo: "✔", reactor: "–" }
];

const transparency = [
  "AWS-powered infrastructure for reliability",
  "Cloudflare shielding and rapid global delivery",
  "Cognito authentication for secure onboarding",
  "Stripe checkout with tokenized payments"
];

export default function HowItWorksPage() {
  return (
    <section className="section">
      <h1>How It Works</h1>
      <p className="muted">
        Follow the journey from install to immersion. Every stage balances fun,
        transparency, and community ownership.
      </p>
      <div className="timeline" style={{ marginTop: "32px" }}>
        {steps.map((step, index) => (
          <div key={step} className="glass-card timeline-step">
            <h2>Step {index + 1}</h2>
            <p className="muted">{step}</p>
          </div>
        ))}
      </div>
      <div className="glass-card" style={{ marginTop: "48px" }}>
        <h2>ML System & Tech Transparency</h2>
        <p className="muted">For the nerds: here&apos;s the stack making Linglear tick.</p>
        <ul className="grid">
          {transparency.map((item) => (
            <li key={item} className="muted">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="glass-card" style={{ marginTop: "48px" }}>
        <h2>Competitor Snapshot</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Linglear</th>
              <th>Duolingo</th>
              <th>Language Reactor</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.feature}>
                <td>{row.feature}</td>
                <td>{row.linglear}</td>
                <td>{row.duolingo}</td>
                <td>{row.reactor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="glass-card" style={{ marginTop: "48px" }}>
        <h2>Voting System & Credit Costs</h2>
        <p className="muted">
          Upload subtitles, cast votes, and receive notifications like “Vote
          completed,” “Translation ready,” and “Community release.” Need a
          translation sooner? Fund it with extra credits and we&apos;ll fast-track
          the drop.
        </p>
      </div>
    </section>
  );
}
