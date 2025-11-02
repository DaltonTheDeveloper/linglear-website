const trustLogos = ["AWS", "Cloudflare", "Stripe", "Discord"];

export function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-content">
        <div>
          <h2>Stay Connected</h2>
          <p>
            Linglear is building a global language learning community powered by
            your favorite shows.
          </p>
        </div>
        <div className="trust-logos" aria-label="Trusted by">
          {trustLogos.map((logo) => (
            <span key={logo} aria-hidden="true">
              {logo}
            </span>
          ))}
        </div>
      </div>
      <div className="footer-meta">
        <p>© {new Date().getFullYear()} Linglear. All rights reserved.</p>
        <nav aria-label="Legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
        </nav>
      </div>
    </footer>
  );
}
