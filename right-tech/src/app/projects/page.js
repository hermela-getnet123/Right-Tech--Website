
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Network,
  Database,
  Layers3,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const categories = ["All", "Software", "Web & Mobile", "Business Systems", "Telecom"];

const workAreas = [
  {
    id: 1,
    title: "Custom Software",
    category: "Software",
    description:
      "Software solutions designed around an organization's workflows, requirements, and business goals.",
    icon: Code2,
    number: "01",
  },
  {
    id: 2,
    title: "Web & Mobile Applications",
    category: "Web & Mobile",
    description:
      "Digital applications that help businesses serve customers and make their services accessible.",
    icon: Smartphone,
    number: "02",
  },
  {
    id: 3,
    title: "Business Management Systems",
    category: "Business Systems",
    description:
      "Digital systems for managing business operations, including inventory, pharmacy, and fleet workflows.",
    icon: Database,
    number: "03",
  },
  {
    id: 4,
    title: "Telecom Integrations",
    category: "Telecom",
    description:
      "Technology integrations and telecom-related solutions that connect services and business systems.",
    icon: Network,
    number: "04",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAreas =
    activeCategory === "All"
      ? workAreas
      : workAreas.filter((area) => area.category === activeCategory);

  return (
    <>
      {/* HERO */}
      <section className="projects-hero">
        <div className="projects-hero-overlay" />

        <div className="container projects-hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label projects-label">
              OUR WORK & CAPABILITIES
            </span>

            <h1>
              Technology built around
              <span> real business needs.</span>
            </h1>

            <p>
              Explore the areas where Right Tech Consulting applies technology
              to help organizations improve their operations and digital
              services.
            </p>

            <div className="projects-hero-actions">
              <Link href="#work-areas" className="primary-btn">
                Explore Our Work <ArrowRight size={18} />
              </Link>

              <Link href="/contact" className="projects-text-link">
                Discuss a project <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="projects-hero-bottom">
          <span>IDEAS INTO DIGITAL SOLUTIONS</span>
          <span>RIGHT TECH CONSULTING</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="section projects-intro">
        <div className="container projects-intro-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">OUR APPROACH</span>
            <h2 className="section-title">
              Every solution starts with understanding the challenge.
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
              Different organizations face different challenges. Our work
              spans software, applications, business systems, and telecom
              technology. The goal is to identify the need first, then build
              technology around it.
            </p>

            <Link href="/services" className="inline-link">
              Explore our services <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WORK AREAS */}
      <section className="section work-areas-section" id="work-areas">
        <div className="container">
          <motion.div
            className="work-areas-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div>
              <span className="section-label">WHAT WE WORK ON</span>
              <h2 className="section-title">Our areas of work</h2>
              <p className="section-description">
                A look at the kinds of technology solutions we work with.
              </p>
            </div>

            <div className="work-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`work-filter-btn ${
                    activeCategory === category ? "active" : ""
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="work-areas-grid">
            {filteredAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  layout
                  key={area.id}
                  className="work-area-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="work-area-top">
                    <span className="work-area-number">{area.number}</span>
                    <div className="work-area-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>
                  </div>

                  <span className="work-area-category">{area.category}</span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>

                  <Link
                    href="/contact"
                    className="work-area-link"
                    aria-label={`Discuss ${area.title}`}
                  >
                    Discuss this area <ArrowUpRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO STATUS */}
      <section className="section portfolio-showcase-section">
        <div className="container">
          <motion.div
            className="portfolio-showcase"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="portfolio-showcase-content">
              <span className="section-label">
                <Sparkles size={15} /> PROJECT SHOWCASE
              </span>

              <h2>
                Good work deserves
                <span> to be showcased.</span>
              </h2>

              <p>
                We're preparing a collection of project stories that will
                highlight the challenges, solutions, and technology behind
                completed work.
              </p>

              <Link href="/contact" className="primary-btn">
                Start a Conversation <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="portfolio-showcase-visual">
              <div className="showcase-orbit orbit-one" />
              <div className="showcase-orbit orbit-two" />
              <div className="showcase-center-icon">
                <BriefcaseBusiness size={48} strokeWidth={1.3} />
              </div>
              <span className="showcase-floating floating-one">
                <Code2 size={20} />
              </span>
              <span className="showcase-floating floating-two">
                <Layers3 size={20} />
              </span>
              <span className="showcase-floating floating-three">
                <Network size={20} />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section projects-cta-section">
        <div className="container">
          <div className="projects-cta">
            <div>
              <span className="section-label">HAVE AN IDEA?</span>
              <h2>Let's build something meaningful.</h2>
              <p>
                Tell us about your business challenge or the solution you have
                in mind.
              </p>
            </div>

            <Link href="/contact" className="primary-btn">
              Talk to Our Team <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
