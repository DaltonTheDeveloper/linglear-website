import { Sidebar } from "@/components/Sidebar";

const leaderboard = [
  { name: "Sofia", points: 1280 },
  { name: "Mateo", points: 980 },
  { name: "Luna", points: 860 }
];

const events = [
  "Friday Watch Party · Elite Season 2",
  "Sunday Vocabulary Sprint",
  "Weekly Poll closes in 6 hours"
];

export default function CommunityLoggedInPage() {
  return (
    <div className="logged-in-layout">
      <Sidebar />
      <div className="grid" style={{ gap: "32px" }}>
        <header className="glass-card">
          <h1>Community Network</h1>
          <p className="muted">
            Collaborate with friends, monitor study groups, and climb the voting
            leaderboard.
          </p>
        </header>
        <div className="card-group">
          <section className="glass-card">
            <h2>Friend Activity</h2>
            <ul className="grid">
              <li className="muted">Camila joined the “Drama Lovers” study group.</li>
              <li className="muted">Andrés uploaded new subtitles for Vis a Vis.</li>
              <li className="muted">Lucía earned the Bronze Helper badge.</li>
            </ul>
          </section>
          <section className="glass-card">
            <h2>Study Groups</h2>
            <p className="muted">
              Create a group to spin up a dedicated Discord channel instantly.
            </p>
            <button type="button" className="primary-cta" style={{ marginTop: "16px" }}>
              Start a Study Group
            </button>
          </section>
        </div>
        <section className="glass-card">
          <h2>Voting Leaderboard</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Contributor</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr key={entry.name}>
                  <td>{entry.name}</td>
                  <td>{entry.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="glass-card">
          <h2>Weekly Events</h2>
          <ul className="grid">
            {events.map((event) => (
              <li key={event} className="muted">
                {event}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
