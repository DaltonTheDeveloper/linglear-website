import Link from "next/link";

const sidebarLinks = [
  { href: "/dashboard", label: "Overview" },
  { href: "/watchlist", label: "Watchlist" },
  { href: "/learning", label: "Word Bank" },
  { href: "/community/logged-in", label: "Community" },
  { href: "/settings", label: "Settings" }
];

export function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Logged in navigation">
      <h2>Welcome Back</h2>
      <ul>
        {sidebarLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
