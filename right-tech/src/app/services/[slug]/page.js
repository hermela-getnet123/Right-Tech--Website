
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";

export default function ServiceDetailPage() {
  const params = useParams();
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <div className="service-not-found">
        <span className="section-label">SERVICE NOT FOUND</span>
        <h1>We couldn't find that service.</h1>
        <p>The page may have moved or the address may be incorrect.</p>
        <Link href="/services" className="primary-btn">
          <ArrowLeft size={17} /> Back to services
        </Link>
      </div>
    );
  }

  const otherServices = services.filter(
    (item) => item.slug !== service.slug
  ).slice(0, 3);

  return (
    <div className="service-detail-page">
      {/* HERO */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-overlay" />

        <div className="container service-detail-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Link href="/services" className="service-back-link">
              <ArrowLeft size={16} /> All services
            </Link>

            <span className="section-label service-detail-label">
              OUR SERVICES / {service.number}
            </span>

            <h1>{service.title}</h1>

            <p>{service.shortDescription}</p>

            <Link
              href={`/contact?subject=${encodeURIComponent(service.title)}`}
              className="primary-btn"
            >
              Discuss this service <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section service-overview-section">
        <div className="container service-overview-grid">
          <motion.div
            className="service-overview-main"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">SERVICE OVERVIEW</span>
            <h2>
              Let's understand what your project needs.
            </h2>
            <p>{service.description}</p>

            <div className="service-overview-note">
              <MessageCircle size={21} />
              <div>
                <strong>Have a specific requirement?</strong>
                <span>
                  Contact the team to confirm whether it fits this service
                  and discuss the available scope.
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="service-number-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span>{service.number}</span>
            <div className="service-number-line" />
            <h3>{service.title}</h3>
            <p>Right Tech Consulting</p>
          </motion.div>
        </div>
      </section>

      {/* DISCUSSION POINTS */}
      <section className="section service-discussion-section">
        <div className="container">
          <div className="service-discussion-heading">
            <span className="section-label">START WITH YOUR REQUIREMENTS</span>
            <h2>What should we discuss?</h2>
            <p>
              These are useful topics to establish the right scope for your
              project. They are discussion points, not a fixed list of
              confirmed deliverables.
            </p>
          </div>

          <div className="service-discussion-grid">
            {service.discussionPoints.map((point, index) => (
              <motion.div
                className="service-discussion-card"
                key={point}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="service-discussion-icon">
                  <CheckCircle2 size={21} />
                </div>
                <span>0{index + 1}</span>
                <h3>{point}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section service-detail-cta-section">
        <div className="container">
          <div className="service-detail-cta">
            <div>
              <span className="section-label">LET'S TALK</span>
              <h2>Have a project related to {service.title}?</h2>
              <p>
                Tell us what you're planning. The team can discuss your
                requirements and clarify the next steps.
              </p>
            </div>

            <Link
              href={`/contact?subject=${encodeURIComponent(service.title)}`}
              className="primary-btn"
            >
              Contact our team <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section other-services-section">
        <div className="container">
          <div className="other-services-heading">
            <div>
              <span className="section-label">EXPLORE MORE</span>
              <h2>Other services</h2>
            </div>
            <Link href="/services" className="secondary-btn">
              View all services <ArrowRight size={17} />
            </Link>
          </div>

          <div className="other-services-grid">
            {otherServices.map((item) => (
              <Link
                href={`/services/${item.slug}`}
                key={item.slug}
                className="other-service-card"
              >
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.shortDescription}</p>
                <div>
                  Explore service <ArrowUpRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
