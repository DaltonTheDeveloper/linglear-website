import Link from "next/link";

const counters = [
  { label: "Subtitles translated", value: "128,450" },
  { label: "Community votes cast", value: "982,215" },
  { label: "Hours of learning", value: "47,820" }
];

const coreFeatures = [
  {
    title: "Crowd-Sourced Subtitles",
    description: "Earn points while improving subtitle translations together."
  },
  {
    title: "Low Machine Learning Costs",
    description: "Efficient, self-improving models keep pricing accessible."
  },
  {
    title: "Community Voting",
    description: "Vote on shows, songs, and lessons to steer the roadmap."
  },
  {
    title: "Point System",
    description: "Unlock badges, challenges, and rewards as you contribute."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content glass-card">
          <span className="tag">Now accepting Alpha signups</span>
          <h1>Watch Your Favorite Shows While Learning Too!</h1>
          <p>Learning languages with subtitles has never felt so easy.</p>
          <Link href="/alpha-signup" className="primary-cta">
            Join Alpha
          </Link>
          <div className="counter-strip">
            {counters.map((counter) => (
              <div key={counter.label} className="counter">
                <strong>{counter.value}</strong>
                <p className="muted">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <h2>Why Linglear</h2>
        <p className="muted">
          Our futuristic classroom blends streaming, subtitles, and community
          power to keep your learning immersive and affordable.
        </p>
        <div className="grid features-grid">
          {coreFeatures.map((feature) => (
            <div key={feature.title} className="glass-card">
              <h3>{feature.title}</h3>
              <p className="muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
