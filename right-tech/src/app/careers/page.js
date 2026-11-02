
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Smartphone,
  Network,
  Lightbulb,
  Users,
  GraduationCap,
  BriefcaseBusiness,
  Send,
  Sparkles,
  Laptop,
} from "lucide-react";

const opportunities = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Explore work involving software engineering, application development, and building digital solutions.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Development",
    description:
      "Contribute to websites and mobile applications designed around user and business needs.",
  },
  {
    icon: Database,
    title: "Business Systems",
    description:
      "Work with business-focused systems, databases, and digital tools that support daily operations.",
  },
  {
    icon: Network,
    title: "Telecom & Technology",
    description:
      "Explore telecom-related solutions, integrations, and broader technology services.",
  },
];

const benefits = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Be part of an environment focused on ideas and practical technology solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Work with others to understand challenges and develop useful solutions.",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    description:
      "Continue developing your knowledge and professional capabilities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Real-world challenges",
    description:
      "Explore how technology can support different organizations and business needs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="careers-hero">
        <div className="careers-hero-overlay" />

        <div className="container careers-hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label careers-label">
              CAREERS AT RIGHT TECH
            </span>

            <h1>
              Build your future
              <span> with technology.</span>
            </h1>

            <p>
              Interested in technology, solving problems, and creating digital
              solutions? Discover the areas of work at Right Tech Consulting
              and get in touch with our team.
            </p>

            <div className="careers-hero-actions">
              <Link href="#opportunities" className="primary-btn">
                Explore Career Areas <ArrowRight size={18} />
              </Link>

              <Link href="/contact" className="careers-secondary-link">
                Contact our team <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="careers-hero-bottom">
          <span>YOUR NEXT CHAPTER STARTS HERE</span>
          <span>RIGHT TECH CONSULTING</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="section careers-intro">
        <div className="container careers-intro-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">GROW WITH US</span>
            <h2 className="section-title">
              Bring your curiosity. Develop your potential.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="section-description">
              Technology keeps changing, and so do the challenges organizations
              face. We value curiosity, thoughtful problem-solving, and a
              willingness to keep learning.
            </p>
            <p className="careers-intro-note">
              Whether your interest is software, applications, databases, or
              telecom technology, explore the areas that connect with your
              professional goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY RIGHT TECH */}
      <section className="section careers-benefits-section">
        <div className="container">
          <div className="careers-section-heading">
            <span className="section-label">WHY RIGHT TECH</span>
            <h2 className="section-title">
              An environment for ideas and growth.
            </h2>
            <p className="section-description">
              The qualities we value in a technology-focused working
              environment.
            </p>
          </div>

          <div className="careers-benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  className="careers-benefit-card"
                  key={benefit.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="careers-benefit-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER AREAS */}
      <section
        className="section careers-areas-section"
        id="opportunities"
      >
        <div className="container">
          <div className="careers-section-heading">
            <span className="section-label">EXPLORE CAREER AREAS</span>
            <h2 className="section-title">
              Where could your skills take you?
            </h2>
            <p className="section-description">
              Explore technology areas connected to Right Tech's services and
              solutions.
            </p>
          </div>

          <div className="careers-areas-grid">
            {opportunities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="careers-area-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="careers-area-top">
                    <div className="careers-area-icon">
                      <Icon size={25} />
                    </div>
                    <span>0{index + 1}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <Link
                    href="/contact"
                    className="careers-area-link"
                  >
                    Express your interest <ArrowUpRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="section careers-openings-section">
        <div className="container">
          <div className="careers-openings">
            <div className="careers-openings-icon">
              <Laptop size={30} />
            </div>

            <span className="section-label">OPPORTUNITIES</span>

            <h2>Looking for your next opportunity?</h2>

            <p>
              There are no verified job listings published in this section
              yet. Please contact the Right Tech team to ask about current
              vacancies, internships, or future opportunities.
            </p>

            <Link href="/contact" className="primary-btn">
              Contact Right Tech <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* APPLICATION CTA */}
      <section className="section careers-cta-section">
        <div className="container">
          <div className="careers-cta">
            <div className="careers-cta-icon">
              <Sparkles size={25} />
            </div>

            <div className="careers-cta-content">
              <span className="section-label">LET'S CONNECT</span>
              <h2>Don't see a role that matches your skills?</h2>
              <p>
                Introduce yourself, share your area of interest, and ask about
                possible opportunities with the team.
              </p>
            </div>

            <Link href="/contact" className="primary-btn">
              Get in Touch <Send size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
