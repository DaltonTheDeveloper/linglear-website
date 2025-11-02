const steps = ["Sign Up", "Confirm Email", "Get Started"];

const benefits = [
  "Interactive bilingual subtitles on day one",
  "Community-powered translations and votes",
  "Earn points while you learn and contribute"
];

export default function AlphaSignupPage() {
  return (
    <section className="section">
      <div className="grid" style={{ gap: "32px" }}>
        <div className="glass-card">
          <h1>Join the Alpha — Your Spanish Learning Adventure Begins!</h1>
          <p className="muted">
            We&apos;re inviting early explorers to help shape the future of
            Linglear. Claim your spot before the list fills up.
          </p>
          <div className="grid" style={{ gap: "16px" }}>
            <div className="progress-bar" aria-hidden="true">
              <span style={{ width: "33%" }} />
            </div>
            <ol className="status-grid" style={{ counterReset: "step" }}>
              {steps.map((step) => (
                <li key={step} className="glass-card" style={{ padding: "16px" }}>
                  <strong>{step}</strong>
                  <p className="muted">Secure cloud signup powered by AWS Cognito.</p>
                </li>
              ))}
            </ol>
          </div>
          <form className="contact-form" style={{ marginTop: "32px" }}>
            <label>
              Email address
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Learning goal
              <select name="goal">
                <option>Watch Spanish dramas with native-level comprehension</option>
                <option>Prepare for an exchange semester</option>
                <option>Keep up with Spanish-speaking friends</option>
              </select>
            </label>
            <label>
              Experience level
              <select name="level">
                <option>Beginner (A1-A2)</option>
                <option>Intermediate (B1-B2)</option>
                <option>Advanced (C1-C2)</option>
              </select>
            </label>
            <p className="muted">Limited spots — first come, first served.</p>
            <button type="submit" className="primary-cta">
              Request Invite
            </button>
          </form>
        </div>
        <aside className="glass-card" aria-label="Alpha benefits">
          <h2>What You Get</h2>
          <ul className="grid">
            {benefits.map((benefit) => (
              <li key={benefit} className="muted">
                {benefit}
              </li>
            ))}
          </ul>
          <div className="glass-card" style={{ marginTop: "24px" }}>
            <h3>Referral Rewards</h3>
            <ul className="grid">
              <li>Bring 1 friend → half off your first month.</li>
              <li>Bring 3 friends → first month free.</li>
              <li>All referrals earn bonus points for 3 months.</li>
            </ul>
          </div>
          <div className="glass-card" style={{ marginTop: "24px" }}>
            <h3>Secure Checkout</h3>
            <p className="muted">Protected by Stripe, SSL, and modern encryption.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
