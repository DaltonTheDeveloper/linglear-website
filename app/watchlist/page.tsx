import { Sidebar } from "@/components/Sidebar";

const shows = [
  {
    title: "La Casa de Papel",
    progress: 72,
    difficulty: "B2",
    status: "Translated by Community"
  },
  {
    title: "Elite",
    progress: 45,
    difficulty: "B1",
    status: "Translation in voting"
  },
  {
    title: "Vis a Vis",
    progress: 18,
    difficulty: "C1",
    status: "New episodes dropping"
  }
];

export default function WatchlistPage() {
  return (
    <div className="logged-in-layout">
      <Sidebar />
      <div className="grid" style={{ gap: "32px" }}>
        <header className="glass-card">
          <h1>Your Watchlist</h1>
          <p className="muted">
            Detected automatically by the Linglear extension. Filter by
            difficulty, progress, or popularity to find your next binge.
          </p>
        </header>
        <div className="card-group">
          {shows.map((show) => (
            <article key={show.title} className="glass-card">
              <h2>{show.title}</h2>
              <p className="muted">Difficulty: {show.difficulty}</p>
              <div className="progress-bar" aria-hidden="true">
                <span style={{ width: `${show.progress}%` }} />
              </div>
              <p className="muted" style={{ marginTop: "12px" }}>
                {show.status}
              </p>
              <div className="word-tags" style={{ marginTop: "16px" }}>
                <span className="tag">Resume</span>
                <span className="tag">Vote</span>
                <span className="tag">Details</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
