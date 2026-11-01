"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  ShoppingCart,
  Truck,
  Pill,
  Smartphone,
  Monitor,
  Network,
  Search,
  Layers3,
  MessageCircle,
} from "lucide-react";

const products = [
  {
    number: "01",
    category: "Business Management",
    title: "Enterprise Resource Planning",
    description:
      "An integrated business management solution designed to bring important organizational operations and information together.",
    icon: Building2,
    tags: ["Business operations", "Management"],
  },
  {
    number: "02",
    category: "Inventory Management",
    title: "Stock & Inventory Management",
    description:
      "A solution area focused on helping businesses manage stock information and inventory-related operations.",
    icon: Boxes,
    tags: ["Stock management", "Inventory"],
  },
  {
    number: "03",
    category: "Healthcare Software",
    title: "Pharmacy Management",
    description:
      "A software solution for pharmacy-related operations and the management of pharmacy information.",
    icon: Pill,
    tags: ["Pharmacy", "Management"],
  },
  {
    number: "04",
    category: "Transport & Logistics",
    title: "Fleet Management",
    description:
      "A digital solution designed to support the management of fleet-related business operations.",
    icon: Truck,
    tags: ["Fleet operations", "Management"],
  },
  {
    number: "05",
    category: "Digital Commerce",
    title: "E-commerce Solutions",
    description:
      "Digital commerce solutions that help businesses establish and manage their online selling experiences.",
    icon: ShoppingCart,
    tags: ["Online commerce", "Digital business"],
  },
  {
    number: "06",
    category: "Application Development",
    title: "Mobile & Desktop Applications",
    description:
      "Application solutions for different platforms, designed around the needs of businesses and their users.",
    icon: Smartphone,
    tags: ["Mobile", "Desktop"],
  },
  {
    number: "07",
    category: "Telecommunications",
    title: "Telecom & Telebirr Integrations",
    description:
      "Telecommunications-related integrations and API-based solutions for connected digital services.",
    icon: Network,
    tags: ["Telecom", "API integration"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="products-hero">
        <div className="products-hero-bg" />
        <div className="products-hero-overlay" />

        <div className="container products-hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div className="products-breadcrumb" variants={fadeUp}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Products</span>
            </motion.div>

            <motion.span className="section-label" variants={fadeUp}>
              SOFTWARE & DIGITAL SOLUTIONS
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Digital solutions designed for{" "}
              <span>business needs.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Explore software and application solution areas that support
              business operations, digital services, and connected
              experiences.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link href="#product-list" className="primary-btn">
                Explore Solutions <ArrowDownIcon />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="products-intro section">
        <div className="container products-intro-grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-label">OUR SOLUTIONS</span>
            <h2>
              Software that supports the way{" "}
              <span>businesses work.</span>
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
              Different industries and organizations have different
              operational needs. Right Tech's software solution areas cover
              business management, inventory, pharmacy operations, fleet
              management, digital commerce, applications, and
              telecommunications integrations.
            </p>
            <p>
              Explore the categories below and contact the team to discuss
              your requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="products-list-section section" id="product-list">
        <div className="container">
          <div className="products-list-heading">
            <div>
              <span className="section-label">PRODUCT AREAS</span>
              <h2 className="section-title">Explore our solutions.</h2>
              <p className="section-description">
                Discover the different types of software solutions associated
                with Right Tech Consulting.
              </p>
            </div>
            <span className="products-total">07 SOLUTION AREAS</span>
          </div>

          <div className="products-grid">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.number}
                  className="product-card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.1,
                  }}
                >
                  <div className="product-card-top">
                    <span className="product-number">
                      {product.number}
                    </span>
                    <div className="product-icon">
                      <Icon size={27} strokeWidth={1.7} />
                    </div>
                  </div>

                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <div className="product-tags">
                    {product.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?solution=${encodeURIComponent(
                      product.title
                    )}`}
                    className="product-card-link"
                  >
                    Discuss this solution
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTION SELECTION */}
      <section className="solution-section section">
        <div className="container solution-grid">
          <motion.div
            className="solution-copy"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-label">FIND A SOLUTION</span>
            <h2>
              Not sure where to <span>start?</span>
            </h2>
            <p>
              Tell us about your organization, your current challenges, and
              what you want to achieve. Our team can help you explore the
              relevant technology solution.
            </p>

            <Link href="/contact" className="primary-btn">
              Talk to Our Team <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            className="solution-visual"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="solution-visual-main">
              <div className="solution-visual-icon">
                <Layers3 size={32} />
              </div>
              <span>YOUR BUSINESS NEEDS</span>
              <h3>Technology with a purpose.</h3>
            </div>

            <div className="solution-mini-card solution-mini-one">
              <Monitor size={20} />
              <span>Business systems</span>
            </div>

            <div className="solution-mini-card solution-mini-two">
              <Smartphone size={20} />
              <span>Digital applications</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="products-cta">
        <div className="container products-cta-inner">
          <div>
            <span className="section-label">LET'S CONNECT</span>
            <h2>Looking for a software solution?</h2>
            <p>
              Get in touch to discuss your business requirements and explore
              the possibilities.
            </p>
          </div>

          <Link href="/contact" className="products-cta-button">
            <MessageCircle size={19} />
            Make an Enquiry
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ArrowDownIcon() {
  return <ArrowRight size={18} />;
}