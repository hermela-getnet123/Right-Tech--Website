"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Globe,
  Cloud,
  Lightbulb,
  Headset,
  ShieldCheck,
  Layers3,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "Software solutions designed around your organization's needs, workflows, and goals.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Mobile Application Development",
    description:
      "Mobile experiences that help businesses connect with their customers wherever they are.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Website Development",
    description:
      "Modern, responsive websites that give your business a stronger digital presence.",
    icon: Globe,
  },
  {
    number: "04",
    title: "Cloud Solutions",
    description:
      "Cloud services and migration support to help organizations modernize their infrastructure.",
    icon: Cloud,
  },
  {
    number: "05",
    title: "Technology Consulting",
    description:
      "Practical technology guidance to help businesses make informed digital decisions.",
    icon: Lightbulb,
  },
  {
    number: "06",
    title: "Testing & Support",
    description:
      "Software testing, maintenance, and technical support throughout the product lifecycle.",
    icon: Headset,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="home-section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
    >
      <span className="section-label">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-background" />
        <div className="hero-overlay" />

        <div className="container hero-content">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.16 },
              },
            }}
          >
            <motion.div className="hero-tag" variants={fadeUp}>
              <Sparkles size={15} />
              <span>Technology. Innovation. Possibility.</span>
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Transforming businesses through{" "}
              <span>innovative technology.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              We help businesses move forward with software development,
              technology consulting, and digital solutions built around
              real-world needs.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>
              <Link href="/services" className="primary-btn hero-btn">
                Explore Our Services <ArrowUpRight size={18} />
              </Link>

              <Link href="/contact" className="hero-secondary-btn">
                Let's Talk <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div className="hero-note" variants={fadeUp}>
              <span className="hero-note-line" />
              <span>Right Tech Consulting</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-floating-card"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="floating-icon">
              <Layers3 size={23} />
            </div>
            <div>
              <strong>Ideas into solutions.</strong>
              <span>Technology for a changing world.</span>
            </div>
            <ArrowUpRight size={20} className="floating-arrow" />
          </motion.div>
        </div>

        <div className="hero-bottom">
          <span>01 — 03</span>
          <span className="hero-bottom-line" />
          <span>Building digital possibilities</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section section">
        <div className="container intro-grid">
          <motion.div
            className="intro-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">WHO WE ARE</span>
            <h2>
              Technology should move your business <span>forward.</span>
            </h2>
          </motion.div>

          <motion.div
            className="intro-right"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>
              Right Tech Consulting focuses on helping organizations make
              better use of technology. From software development to
              technology consulting, we bring ideas and digital solutions
              together to address business needs.
            </p>

            <Link href="/about" className="text-link">
              Discover Right Tech <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Technology solutions for real business needs."
            description="Explore our range of technology services, designed to help organizations build, improve, and manage their digital capabilities."
          />

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  className="service-card"
                  key={service.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="service-card-top">
                    <span className="service-number">{service.number}</span>
                    <div className="service-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link href="/services" className="service-link">
                    Learn more <ArrowUpRight size={17} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="services-bottom">
            <p>Looking for a solution for your business?</p>
            <Link href="/services" className="secondary-btn">
              View All Services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-section section">
        <div className="container approach-grid">
          <motion.div
            className="approach-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="approach-image" />
            <div className="approach-image-overlay" />
            <div className="approach-image-caption">
              <span>RIGHT TECH CONSULTING</span>
              <strong>Making technology meaningful.</strong>
            </div>
            <div className="approach-decoration">RT.</div>
          </motion.div>

          <motion.div
            className="approach-copy"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">OUR APPROACH</span>
            <h2>
              Good technology starts with understanding <span>your needs.</span>
            </h2>
            <p>
              Every organization has different challenges. We focus on
              understanding those challenges and identifying technology
              solutions that make sense for the people and businesses using
              them.
            </p>

            <div className="approach-points">
              <div>
                <ShieldCheck size={21} />
                <span>Solutions built around business needs</span>
              </div>
              <div>
                <Code2 size={21} />
                <span>Practical software development</span>
              </div>
              <div>
                <Lightbulb size={21} />
                <span>Technology-driven thinking</span>
              </div>
            </div>

            <Link href="/about" className="primary-btn">
              More About Us <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="home-cta">
        <div className="container home-cta-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">LET'S WORK TOGETHER</span>
            <h2>
              Have an idea? Let's make it <span>happen.</span>
            </h2>
            <p>
              Get in touch with Right Tech Consulting and let's explore how
              technology can support your business.
            </p>
            <Link href="/contact" className="cta-button">
              Start a Conversation <ArrowUpRight size={19} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}