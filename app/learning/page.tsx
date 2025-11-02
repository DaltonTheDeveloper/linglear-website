import { Sidebar } from "@/components/Sidebar";

const tabs = ["All Words", "Difficult Words", "Mastered Words"];

const words = [
  { term: "atraco", difficulty: "B2", status: "In review" },
  { term: "arriesgar", difficulty: "C1", status: "Needs practice" },
  { term: "valiente", difficulty: "B1", status: "Mastered" }
];

export default function LearningPage() {
  return (
    <div className="logged-in-layout">
      <Sidebar />
      <div className="grid" style={{ gap: "32px" }}>
        <header className="glass-card">
          <h1>Word Bank & Learning Lab</h1>
          <p className="muted">
            Review vocabulary captured from subtitles, download flashcards, and
            sync results from the mobile practice app.
          </p>
        </header>
        <nav className="glass-card" aria-label="Word filters">
          <ul className="word-tags">
            {tabs.map((tab) => (
              <li key={tab} className="tag">
                {tab}
              </li>
            ))}
          </ul>
        </nav>
        <section className="glass-card">
          <table className="table">
            <thead>
              <tr>
                <th>Word</th>
                <th>Difficulty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {words.map((word) => (
                <tr key={word.term}>
                  <td>{word.term}</td>
                  <td>{word.difficulty}</td>
                  <td>{word.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="word-tags" style={{ marginTop: "24px" }}>
            <span className="tag">Download Flashcards</span>
            <span className="tag">Upload Results</span>
            <span className="tag">Study Now</span>
          </div>
        </section>
      </div>
    </div>
  );
}
