export default function ContactPage() {
  return (
    <section className="section">
      <h1>Contact Linglear</h1>
      <p className="muted">
        Send a secure message to the team. We&apos;ll get back to you within 24
        hours.
      </p>
      <form className="contact-form" style={{ marginTop: "32px" }}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          Inquiry type
          <select name="type" defaultValue="general">
            <option value="general">General question</option>
            <option value="media">Media inquiry</option>
            <option value="support">Support request</option>
          </select>
        </label>
        <label>
          Message
          <textarea name="message" rows={6} placeholder="How can we help?" required />
        </label>
        <button type="submit" className="primary-cta">
          Send Message
        </button>
      </form>
    </section>
  );
}
