import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    // For now just show success (no backend)
    alert("Message sent successfully!");

    // Clear form
    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">

      <div className="contact-banner">
        <h1>CONTACT US</h1>
      </div>

      <div className="contact-container">

        {/* Left Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need assistance with booking a car?
            Feel free to reach out to us.
          </p>

          <div className="info-item">
            <strong>Address</strong>
            <span>Chennai, Tamil Nadu, India</span>
          </div>

          <div className="info-item">
            <strong>Phone</strong>
            <span>+91 98765 43210</span>
            <span>+91 91234 56789</span>
          </div>

          <div className="info-item">
            <strong>Email</strong>
            <span>support@carrental.com</span>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <h2>Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />

          <button onClick={handleSubmit}>
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
}
