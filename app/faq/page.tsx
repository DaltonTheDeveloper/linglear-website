const faqs = [
  {
    question: "Does it work without Netflix Premium?",
    answer:
      "You can still practice vocabulary and review subtitles, but a Premium subscription unlocks dual subtitle playback." 
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. Manage your membership in the Settings page and keep your progress data." 
  },
  {
    question: "Why no refunds during alpha?",
    answer:
      "Early access pricing covers the costs of building and iterating quickly with the community." 
  },
  {
    question: "Will other streaming sites be supported?",
    answer:
      "Yes! Disney+, Max, and Crunchyroll support are already in experimentation." 
  }
];

export default function FaqPage() {
  return (
    <section className="section">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion" style={{ marginTop: "32px" }}>
        {faqs.map((faq) => (
          <details key={faq.question} className="accordion-item">
            <summary>{faq.question}</summary>
            <p className="muted" style={{ marginTop: "12px" }}>
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
      <p style={{ marginTop: "32px" }}>
        Still curious? <a href="/contact">Reach out through our contact form.</a>
      </p>
    </section>
  );
}
