
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TeamSection from "@/components/about/TeamSection";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Users,
  Handshake,
  Code2,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We value creative thinking and practical technology that responds to real challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "We believe technology should be reliable, useful, and built with care.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "We value working closely with clients to understand their needs and goals.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description:
      "We embrace learning, improvement, and technology that helps organizations move forward.",
  },
];

const focusAreas = [
  {
    icon: Code2,
    title: "Technology solutions",
    description:
      "Software, web, and mobile application development for different business needs.",
  },
  {
    icon: Users,
    title: "Client-centered thinking",
    description:
      "Understanding the people, processes, and challenges behind every technology request.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term value",
    description:
      "Considering usability, reliability, and future needs when approaching solutions.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay" />

        <div className="container about-hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label about-label">
              GET TO KNOW US
            </span>

            <h1>
              Technology with
              <span> purpose and direction.</span>
            </h1>

            <p>
              We focus on technology consulting and digital solutions that
              help organizations address challenges, improve processes, and
              explore new opportunities.
            </p>

            <Link href="/services" className="primary-btn">
              Discover What We Do <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="about-hero-bottom">
          <span>ABOUT RIGHT TECH CONSULTING</span>
          <span>THINK. BUILD. TRANSFORM.</span>
        </div>
      </section>

      {/* COMPANY INTRO */}
      <section className="section about-overview">
        <div className="container about-overview-grid">
          <motion.div
            className="about-overview-image"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-image-main" />
            <div className="about-image-accent">
              <span>RIGHT TECH</span>
              <strong>Technology for a smarter future.</strong>
            </div>
            <div className="about-image-decoration" />
          </motion.div>

          <motion.div
            className="about-overview-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">WHO WE ARE</span>

            <h2 className="section-title">
              Bringing business needs and technology together.
            </h2>

            <p>
              Right Tech Consulting focuses on delivering technology-related
              services, including custom software development, web and mobile
              applications, telecom solutions, and technology consulting.
            </p>

            <p>
              We recognize that technology is most valuable when it solves a
              real problem. That's why understanding the needs of an
              organization is an important starting point for any solution.
            </p>

            <Link href="/contact" className="inline-link">
              Get in touch with us <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="section about-purpose-section">
        <div className="container">
          <div className="about-section-heading">
            <span className="section-label">OUR PURPOSE</span>
            <h2 className="section-title">
              What guides the way we think.
            </h2>
            <p className="section-description">
              The principles behind our approach to technology and business
              challenges.
            </p>
          </div>

          <div className="about-purpose-grid">
            <motion.article
              className="purpose-card mission-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="purpose-icon">
                <Target size={27} />
              </div>
              <span>OUR MISSION</span>
              <h3>Make technology meaningful.</h3>
              <p>
                To develop and deliver practical technology solutions that
                address business needs, support better processes, and create
                value for the organizations we serve.
              </p>
            </motion.article>

            <motion.article
              className="purpose-card vision-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="purpose-icon">
                <Eye size={27} />
              </div>
              <span>OUR VISION</span>
              <h3>Contribute to a smarter digital future.</h3>
              <p>
                To contribute to a future where organizations can use
                technology confidently to innovate, adapt, and grow.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section about-values-section">
        <div className="container">
          <div className="about-section-heading">
            <span className="section-label">WHAT MATTERS TO US</span>
            <h2 className="section-title">The values behind our work.</h2>
            <p className="section-description">
              The qualities we aim to bring into the way we approach
              technology and collaboration.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  className="about-value-card"
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="about-value-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section about-approach-section">
        <div className="container about-approach-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">HOW WE APPROACH OUR WORK</span>
            <h2 className="section-title">
              Start with the problem. Build around the solution.
            </h2>
            <p className="section-description">
              Technology projects should be guided by the needs they are
              intended to address. We organize our approach around
              understanding, thoughtful planning, and practical implementation.
            </p>

            <Link href="/services" className="inline-link">
              Explore our capabilities <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          <div className="about-focus-list">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="about-focus-item"
                  key={item.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <div className="about-focus-icon">
                    <Icon size={23} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
{/* TEAM */}
<TeamSection />

      {/* CTA */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta">
            <div>
              <span className="section-label">LET'S CONNECT</span>
              <h2>Have a challenge we can help solve?</h2>
              <p>
                Let's discuss your goals and explore the right technology
                approach for your organization.
              </p>
            </div>

            <Link href="/contact" className="primary-btn">
              Contact Us <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
