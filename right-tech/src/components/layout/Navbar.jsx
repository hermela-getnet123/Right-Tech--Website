"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Insights", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container navbar">

        {/* LOGO */}
        <Link href="/" className="logo">
          <div className="logo-mark">R</div>

          <div>
            RIGHT<span>TECH</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-links">
          {navigation.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" &&
                pathname.startsWith(item.href + "/"));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${active ? "active" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="nav-actions">

          <button
            className="theme-toggle"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          <Link href="/contact" className="primary-btn">
            Let's Talk
            <ArrowUpRight size={17} />
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav className="mobile-menu">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}

          <Link href="/contact" className="primary-btn">
            Let's Talk
            <ArrowUpRight size={17} />
          </Link>
        </nav>
      )}
    </header>
  );
}