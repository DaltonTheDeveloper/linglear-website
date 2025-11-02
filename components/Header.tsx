import Link from "next/link";

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/alpha-signup", label: "Alpha" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/community", label: "Community" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

const loggedInLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/watchlist", label: "Watchlist" },
  { href: "/learning", label: "Word Bank" },
  { href: "/community/logged-in", label: "Community" },
  { href: "/settings", label: "Settings" }
];

export function Header() {
  return (
    <header className="global-header">
      <div className="brand">Linglear</div>
      <nav aria-label="Primary">
        <ul>
          {publicLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav aria-label="Logged in shortcuts" className="logged-in-nav">
        <ul>
          {loggedInLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
