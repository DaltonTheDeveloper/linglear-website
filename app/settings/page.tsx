import { Sidebar } from "@/components/Sidebar";

const sections = [
  {
    title: "Profile",
    description: "Update your display name, email, and target language.",
    fields: ["Username", "Email", "Target Language"]
  },
  {
    title: "Subscription",
    description: "Manage billing, cancel anytime, or add more credits.",
    fields: ["Plan", "Billing Method", "Credit Balance"]
  },
  {
    title: "Privacy",
    description: "Control tracking preferences and subtitle contribution visibility.",
    fields: ["Learning Analytics", "Conversation Storage"]
  },
  {
    title: "Security",
    description: "Protect your account with strong passwords and two-factor authentication.",
    fields: ["Password", "Two-Factor"]
  },
  {
    title: "Notifications",
    description: "Choose which emails you want: events, product updates, or friend alerts.",
    fields: ["Event Emails", "Product Updates", "Friend Activity"]
  }
];

export default function SettingsPage() {
  return (
    <div className="logged-in-layout">
      <Sidebar />
      <div className="grid" style={{ gap: "32px" }}>
        <header className="glass-card">
          <h1>Settings</h1>
          <p className="muted">
            Customize your Linglear experience. All changes are stored securely
            with Cognito and Stripe.
          </p>
        </header>
        <div className="grid" style={{ gap: "24px" }}>
          {sections.map((section) => (
            <section key={section.title} className="glass-card">
              <h2>{section.title}</h2>
              <p className="muted">{section.description}</p>
              <ul className="grid" style={{ marginTop: "16px" }}>
                {section.fields.map((field) => (
                  <li key={field} className="muted">
                    {field}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <section className="glass-card">
          <h2>Need Support?</h2>
          <p className="muted">
            Reach out through the embedded form or check the FAQ for quick
            answers.
          </p>
          <button type="button" className="primary-cta" style={{ marginTop: "16px" }}>
            Contact Support
          </button>
        </section>
      </div>
    </div>
  );
}
