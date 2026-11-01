import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <section className="section">
      <div className="container">

        <span className="section-label">
          <Sparkles size={16} />
          RIGHT TECH CONSULTING
        </span>

        <h1
          className="section-title"
          style={{
            marginTop: 25,
            maxWidth: 800,
            fontSize: "clamp(42px, 7vw, 76px)",
          }}
        >
          Transforming businesses through
          <span style={{ color: "var(--primary)" }}>
            {" "}innovative technology.
          </span>
        </h1>

        <p
          className="section-description"
          style={{
            marginTop: 25,
            fontSize: 18,
          }}
        >
          We deliver innovative technology solutions
          that help businesses grow, operate efficiently,
          and embrace digital transformation.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 15,
            marginTop: 35,
          }}
        >
          <Link href="/services" className="primary-btn">
            Explore Our Services
            <ArrowRight size={18} />
          </Link>

          <Link href="/contact" className="secondary-btn">
            Get in Touch
          </Link>
        </div>

      </div>
    </section>
  );
}