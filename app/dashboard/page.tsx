import { Sidebar } from "@/components/Sidebar";

const stats = [
  {
    title: "Continue Watching",
    description: "Episode 5 · La Casa de Papel",
    progress: 72
  },
  {
    title: "Today&apos;s Goal",
    description: "Watch 25 minutes to keep your streak glowing.",
    progress: 60
  }
];

const highlights = [
  {
    title: "Recent Words",
    items: ["atraco", "equipo", "valiente", "riesgo"]
  },
  {
    title: "Trouble Words",
    items: ["arriesgar", "susurrar", "complicado"]
  }
];

const notifications = [
  "Friend Maria reached a 7-day streak!",
  "New community translation available for Elite Season 2.",
  "Vote completed: “Translation ready” for La Reina del Flow."
];

export default function DashboardPage() {
  return (
    <div className="logged-in-layout">
      <Sidebar />
      <div className="grid" style={{ gap: "32px" }}>
        <section className="grid" style={{ gap: "24px" }}>
          {stats.map((stat) => (
            <article key={stat.title} className="glass-card">
              <h2 dangerouslySetInnerHTML={{ __html: stat.title }} />
              <p className="muted">{stat.description}</p>
              <div className="progress-bar" aria-hidden="true">
                <span style={{ width: `${stat.progress}%` }} />
              </div>
            </article>
          ))}
        </section>
        <section className="card-group">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="glass-card">
              <h2>{highlight.title}</h2>
              <div className="word-tags">
                {highlight.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>
        <section className="glass-card">
          <h2>Motivation</h2>
          <p className="muted">“Consistency beats intensity.” Keep the streak alive!</p>
          <ul className="grid" style={{ marginTop: "16px" }}>
            {notifications.map((note) => (
              <li key={note} className="muted">
                {note}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
