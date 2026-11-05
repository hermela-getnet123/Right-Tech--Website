
import Link from "next/link";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const footerGroups = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { name: "Services", href: "/services" },
      { name: "Products", href: "/products" },
      { name: "Projects", href: "/projects" },
      { name: "Insights", href: "/blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          {/* COMPANY */}
          <div>
            <Link
              href="/"
              className="logo"
              aria-label="Right Tech Consulting home"
            >
              <span className="brand-logo-frame">
                <img
                  src="/images/rt-logo-site.png"
                  alt="Right Tech logo"
                  className="brand-logo-image"
                />
              </span>

              <span className="brand-wordmark">
                RIGHT<span>TECH</span>
                <small>CONSULTING</small>
              </span>
            </Link>

            <p className="footer-description">
              Transforming businesses through innovative
              technology solutions, software development,
              and digital transformation.
            </p>

            {/* OFFICIAL SOCIAL MEDIA */}
            <div className="footer-socials">
              <a
                href="https://web.facebook.com/p/Right-tech-solution-61569586474057/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Right Tech on Facebook"
              >
                <FaFacebookF size={19} />
              </a>

              <a
                href="https://www.linkedin.com/company/right-tech-soution/home/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Right Tech on LinkedIn"
              >
                <FaLinkedinIn size={19} />
              </a>
            </div>
          </div>

          {/* FOOTER LINKS */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="footer-heading">
                {group.title}
              </h3>

              <div className="footer-links">
                {group.links.map((link) => (
                  <Link key={link.name} href={link.href}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* CONTACT */}
          <div>
            <h3 className="footer-heading">
              Get in Touch
            </h3>

            <div className="footer-links">
              <Link href="/contact">
                Contact Our Team
                <ArrowUpRight
                  size={14}
                  style={{
                    display: "inline",
                    marginLeft: 5,
                  }}
                />
              </Link>

              <Link href="/contact">
                Request a Consultation
              </Link>

              <Link href="/services">
                Explore Our Services
              </Link>
            </div>

            <div className="footer-contact-details">
              <a href="tel:+251934472222">
                <Phone size={15} />
                0934472222
              </a>

              <a href="tel:+251911064719">
                <Phone size={15} />
                0911064719
              </a>

              <p>
              <MapPin size={15} />
              Bole, Getu Commercial Building,
              10th Floor, Room No. 1002,
              Addis Ababa, Ethiopia
            </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Right Tech Consulting.
            All rights reserved.
          </p>

          <p>
            Built for a smarter digital future.
          </p>
        </div>
      </div>
    </footer>
  );
}
