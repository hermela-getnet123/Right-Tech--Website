
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";


const contactDetails = [
  {
    icon: Mail,
    title: "Email us",
    value: "Email address coming soon",
    href: "#contact-form",
  },
  {
    icon: Phone,
    title: "Call us",
    value: "0934472222",
    href: "tel:+251934472222",
  },
  {
    icon: Phone,
    title: "Call us",
    value: "0911064719",
    href: "tel:+251911064719",
  },
  {
    icon: MapPin,
    title: "Our location",
    value: "Addis Ababa, Ethiopia",
    href: "#location",
  },
  {
    icon: Clock,
    title: "Working hours",
    value: "Contact us for availability",
    href: "#contact-form",
  },
];


const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject) newErrors.subject = "Please select a subject.";
    if (!form.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="container contact-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label contact-hero-label">
              GET IN TOUCH
            </span>
            <h1>
              Let's start a <span>conversation.</span>
            </h1>
            <p>
              Have a project in mind, need a technology solution, or simply
              want to learn more about what we do? We'd love to hear from you.
            </p>
            <a href="#contact-form" className="primary-btn">
              Send us a message <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="section contact-details-section">
        <div className="container">
          <div className="contact-details-grid">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="contact-detail-card"
                >
                  <div className="contact-detail-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                  <ArrowUpRight className="contact-detail-arrow" size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM AND SIDE PANEL */}
      <section className="section contact-main-section" id="contact-form">
        <div className="container contact-main-grid">
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">CONTACT FORM</span>
            <h2>Tell us what you need.</h2>
            <p className="contact-form-intro">
              Share a little about your idea or challenge. Our team can then
              understand how best to assist you.
            </p>

            {submitted ? (
              <div className="contact-success">
                <CheckCircle2 size={48} />
                <h3>Message received!</h3>
                <p>
                  Your form passed the frontend validation. The form is not
                  connected to email yet, so no message has been sent.
                </p>
                <button
                  className="primary-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="contact-form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full name *</label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                    {errors.name && <small>{errors.name}</small>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                    {errors.email && <small>{errors.email}</small>}
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+251 ..."
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option value="">Choose a subject</option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="Mobile Application">
                        Mobile Application
                      </option>
                      <option value="Telecom Solutions">
                        Telecom Solutions
                      </option>
                      <option value="Technology Consulting">
                        Technology Consulting
                      </option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && <small>{errors.subject}</small>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Your message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && <small>{errors.message}</small>}
                </div>

                <button type="submit" className="primary-btn contact-submit">
                  Send message <Send size={17} />
                </button>
              </form>
            )}
          </motion.div>

          <motion.aside
            className="contact-side-panel"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">LET'S CONNECT</span>
            <h2>Good ideas start with a conversation.</h2>
            <p>
              Whether you're exploring a new digital product, improving a
              business process, or looking for technical guidance, let's
              discuss your goals.
            </p>

            <div className="contact-side-divider" />

            <h3>Looking for a quick conversation?</h3>
            <p>
              Reach out through WhatsApp for a more direct conversation.
            </p>

            {/* Replace the placeholder number with the verified company WhatsApp number */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
              <ArrowUpRight size={17} />
            </a>

            <div className="contact-side-note">
              <MapPin size={19} />
              <span>Based in Addis Ababa, Ethiopia</span>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section contact-location-section" id="location">
        <div className="container">
          <div className="contact-location-heading">
            <div>
              <span className="section-label">FIND US</span>
            <h2>Visit Our Office</h2>
            <p>
              Find us at Getu Commercial Building, Bole,
              Addis Ababa, Ethiopia.
            </p>
            </div>
            <Link
              href="/about"
              className="secondary-btn"
            >
              About our company <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="contact-map">
          <iframe
            title="Right Tech Consulting Office Location"
            src="https://www.google.com/maps?cid=14799861194580733796&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          </div>
        <p className="contact-map-note">
          Office Address: Getu Commercial Building,
          10th Floor, Room No. 1002, Bole, Addis Ababa.
        </p>
        </div>
      </section>
    </div>
  );
}
