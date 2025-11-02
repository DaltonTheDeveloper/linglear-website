const cards = [
  {
    title: "Join the Discord",
    description: "Connect with binge-learning friends, tutors, and moderators.",
    cta: "Enter Server",
    className: "color-discord"
  },
  {
    title: "Events & Watch Parties",
    description: "Track upcoming shows, quizzes, and global meetups.",
    cta: "View Calendar",
    className: "color-events"
  },
  {
    title: "Spotify Playlist",
    description: "Immerse yourself with curated Spanish tracks.",
    cta: "Listen Now",
    className: "color-spotify"
  },
  {
    title: "Spanish News Feed",
    description: "Stay updated with community-sourced headlines.",
    cta: "Browse Stories",
    className: "color-news"
  }
];

export default function CommunityPage() {
  return (
    <section className="section">
      <h1>Community Hub</h1>
      <p className="muted">
        Explore the social heartbeat of Linglear and stay engaged between
        episodes.
      </p>
      <div className="badge-grid" style={{ marginTop: "32px" }}>
        {cards.map((card) => (
          <article key={card.title} className={`badge-card ${card.className}`}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button type="button" className="primary-cta" style={{ marginTop: "16px" }}>
              {card.cta}
            </button>
          </article>
        ))}
      </div>
      <div className="glass-card" style={{ marginTop: "48px" }}>
        <h2>Newsletter Sign-Up</h2>
        <p className="muted">Stay in the loop with upcoming releases and community wins.</p>
        <form className="contact-form" style={{ marginTop: "16px" }}>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <button type="submit" className="primary-cta">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
