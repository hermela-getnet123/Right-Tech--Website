"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Radio,
  Code2,
  Smartphone,
  Globe,
  Lightbulb,
  Cloud,
  ShieldCheck,
  Headset,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    number: "01",
    slug: "telecom-value-added-services",
    title: "Telecom Value-Added Services",
    short: "VAS",
    description:
      "Technology services that extend the capabilities of telecommunications platforms and help businesses deliver connected digital experiences.",
    details: [
      "Telecom platform integration",
      "Value-added service solutions",
      "API-based integrations",
    ],
    icon: Radio,
  },
  {
    number: "02",
    slug: "custom-software-development",
    title: "Custom Software Development",
    short: "Software",
    description:
      "Purpose-built software applications designed to address specific business processes, operational challenges, and organizational requirements.",
    details: [
      "Business application development",
      "Database-driven systems",
      "Workflow and process solutions",
    ],
    icon: Code2,
  },
  {
    number: "03",
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    short: "Mobile",
    description:
      "Mobile applications designed to bring services, information, and digital experiences closer to users.",
    details: [
      "Mobile application development",
      "Application interface design",
      "Mobile system integration",
    ],
    icon: Smartphone,
  },
  {
    number: "04",
    slug: "website-development",
    title: "Website Development",
    short: "Web",
    description:
      "Modern web experiences that help organizations establish their online presence and deliver useful digital services.",
    details: [
      "Business websites",
      "Web application development",
      "Responsive web interfaces",
    ],
    icon: Globe,
  },
  {
    number: "05",
    slug: "technology-consulting",
    title: "Technology Consulting Services",
    short: "Consulting",
    description:
      "Technology guidance that helps organizations evaluate their needs, explore opportunities, and make informed technology decisions.",
    details: [
      "Technology advisory",
      "Digital solution planning",
      "Technical guidance",
    ],
    icon: Lightbulb,
  },
  {
    number: "06",
    slug: "cloud-solutions",
    title: "Cloud Solutions and Migration",
    short: "Cloud",
    description:
      "Cloud-related solutions and migration support to help organizations approach modern infrastructure and digital environments.",
    details: [
      "Cloud solution planning",
      "Cloud migration support",
      "Infrastructure modernization",
    ],
    icon: Cloud,
  },
  {
    number: "07",
    slug: "testing-services",
    title: "Testing Services",
    short: "Testing",
    description:
      "Software testing activities that help assess application quality, identify issues, and support reliable software experiences.",
    details: [
      "Software quality testing",
      "Functional testing",
      "Issue identification and reporting",
    ],
    icon: ShieldCheck,
  },
  {
    number: "08",
    slug: "support-services",
    title: "Support Services",
    short: "Support",
    description:
      "Technical assistance and ongoing support to help organizations maintain and manage their technology solutions.",
    details: [
      "Technical assistance",
      "Application maintenance",
      "Troubleshooting support",
    ],
    icon: Headset,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="services-hero">
        <div className="services-hero-bg" />
        <div className="services-hero-overlay" />

        <div className="container services-hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div className="services-breadcrumb" variants={fadeUp}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </motion.div>

            <motion.span className="section-label" variants={fadeUp}>
              WHAT WE OFFER
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Technology services that move your business{" "}
              <span>forward.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Explore our technology services and discover how digital
              solutions can support your organization's needs.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link href="/contact" className="primary-btn">
                Discuss Your Project <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="service-intro section">
        <div className="container service-intro-grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-label">OUR CAPABILITIES</span>
            <h2>
              The right technology for the <span>right challenges.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <p>
              Every business has different technology requirements. Our
              services cover software, mobile and web development,
              telecommunications, consulting, cloud solutions, testing, and
              technical support.
            </p>
            <p>
              Explore the service areas below to learn more about the
              solutions we offer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="all-services-section section">
        <div className="container">
          <div className="all-services-heading">
            <div>
              <span className="section-label">OUR SERVICES</span>
              <h2 className="section-title">Explore what we do.</h2>
            </div>
            <span className="service-count">08 SERVICE AREAS</span>
          </div>

          <div className="all-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.slug}
                  className="all-service-card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                >
                  <div className="all-service-top">
                    <span>{service.number}</span>
                    <div className="all-service-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>
                  </div>

                  <span className="all-service-category">
                    {service.short}
                  </span>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul className="service-detail-list">
                    {service.details.map((detail) => (
                      <li key={detail}>
                        <CheckCircle2 size={16} />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="all-service-link"
                  >
                    Explore service <ArrowUpRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS / APPROACH */}
      <section className="service-process-section section">
        <div className="container">
          <div className="service-process-heading">
            <span className="section-label">HOW WE APPROACH SOLUTIONS</span>
            <h2 className="section-title">
              From understanding the need to exploring the solution.
            </h2>
          </div>

          <div className="service-process-grid">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Understand the business needs and the challenge to be addressed.",
              },
              {
                number: "02",
                title: "Explore",
                text: "Identify relevant technology options and possible approaches.",
              },
              {
                number: "03",
                title: "Develop",
                text: "Work toward a solution that addresses the identified requirements.",
              },
              {
                number: "04",
                title: "Support",
                text: "Provide relevant technical support for the solution.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                className="process-step"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <span className="process-number">{step.number}</span>
                <div className="process-line" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="services-contact-banner">
        <div className="container services-contact-inner">
          <div>
            <span className="section-label">HAVE A PROJECT IN MIND?</span>
            <h2>Let's find the right solution together.</h2>
            <p>
              Tell us what you're looking to achieve, and let's start a
              conversation.
            </p>
          </div>

          <Link href="/contact" className="services-contact-button">
            <MessageCircle size={19} />
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}