import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
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
            <Link href="/" className="logo">
              <div className="logo-mark">R</div>
              <div>
                RIGHT<span>TECH</span>
              </div>
            </Link>

            <p className="footer-description">
              Transforming businesses through innovative
              technology solutions, software development,
              and digital transformation.
            </p>

            <div style={{
              display: "flex",
              gap: "15px",
              marginTop: "24px"
            }}>
              <a href="#" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram size={20} />
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
                  style={{ display: "inline", marginLeft: 5 }}
                />
              </Link>

              <Link href="/contact">
                Request a Consultation
              </Link>

              <Link href="/services">
                Explore Our Services
              </Link>
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