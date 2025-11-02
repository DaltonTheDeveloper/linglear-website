const sections = [
  {
    title: "Learn While Watching",
    bullets: [
      "Interactive bilingual subtitles that adapt as you progress",
      "Flashcards generated from the episodes you watch",
      "Downloadable mobile companion to track offline practice"
    ]
  },
  {
    title: "Power to the Community",
    bullets: [
      "Crowd-voted subtitles with transparent release notes",
      "Peer tutoring requests and Discord-powered friendships",
      "Community playlists, quizzes, and show recommendations"
    ]
  },
  {
    title: "Gamified Progress",
    bullets: [
      "Points, badges, and streaks to celebrate every milestone",
      "Weekly challenges and translation sprints",
      "Leaderboard that highlights collaborative wins"
    ]
  }
];

const futureFeatures = [
  "Global pronunciation rooms",
  "Extension-powered word capture on any streaming service",
  "Smart coach that suggests episodes by your skill level"
];

export default function FeaturesPage() {
  return (
    <section className="section">
      <h1>Feature Highlights</h1>
      <p className="muted">
        Linglear blends the comfort of binge-worthy shows with cutting-edge
        learning science.
      </p>
      <div className="grid three-col" style={{ marginTop: "32px" }}>
        {sections.map((section) => (
          <article key={section.title} className="glass-card">
            <h2>{section.title}</h2>
            <ul className="grid">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="muted">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="glass-card" style={{ marginTop: "48px" }}>
        <h2>Future Beta Features</h2>
        <p className="muted">A glimpse at what we are prototyping next.</p>
        <ul className="grid">
          {futureFeatures.map((feature) => (
            <li key={feature} className="muted">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
