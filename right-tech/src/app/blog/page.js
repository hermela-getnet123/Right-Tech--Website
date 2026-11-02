
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Code2,
  Smartphone,
  Database,
  Cloud,
  Lightbulb,
  Newspaper,
  BookOpen,
} from "lucide-react";

const categories = [
  "All",
  "Software",
  "Business Technology",
  "Telecom",
  "Digital Transformation",
];

const articles = [
  {
    id: 1,
    title: "How custom software can support business growth",
    description:
      "An introduction to how software tailored to business processes can help organizations manage their operations.",
    category: "Software",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
    icon: Code2,
    readTime: "Editorial preview",
  },
  {
    id: 2,
    title: "What to consider before developing a mobile application",
    description:
      "Explore important planning considerations, from understanding users to defining the purpose of an application.",
    category: "Software",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85",
    icon: Smartphone,
    readTime: "Editorial preview",
  },
  {
    id: 3,
    title: "Why data management matters to modern businesses",
    description:
      "A look at the role of organized business data in supporting everyday operations and informed decisions.",
    category: "Business Technology",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    icon: Database,
    readTime: "Editorial preview",
  },
  {
    id: 4,
    title: "Understanding cloud solutions for organizations",
    description:
      "An introduction to cloud technology and the questions organizations can consider when exploring migration.",
    category: "Business Technology",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
    icon: Cloud,
    readTime: "Editorial preview",
  },
  {
    id: 5,
    title: "The role of telecom integrations in digital services",
    description:
      "Discover how connected systems and integrations can support digital services and business processes.",
    category: "Telecom",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    icon: Lightbulb,
    readTime: "Editorial preview",
  },
  {
    id: 6,
    title: "Making digital transformation practical",
    description:
      "Why successful digital transformation begins with clear goals, people, processes, and suitable technology.",
    category: "Digital Transformation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
    icon: BookOpen,
    readTime: "Editorial preview",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;

      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <>
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-overlay" />

        <div className="container blog-hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label blog-label">
              IDEAS · KNOWLEDGE · PERSPECTIVES
            </span>

            <h1>
              Insights for a
              <span> digital world.</span>
            </h1>

            <p>
              Explore ideas, practical knowledge, and perspectives on
              technology, software, and digital transformation.
            </p>

            <Link href="#latest-insights" className="primary-btn">
              Explore Insights <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="blog-hero-bottom">
          <span>RIGHT TECH INSIGHTS</span>
          <span>THINK. LEARN. INNOVATE.</span>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section blog-featured-section">
        <div className="container">
          <div className="blog-featured-card">
            <div className="blog-featured-image">
              <div className="blog-featured-image-overlay" />
              <span className="blog-featured-image-label">
                <Newspaper size={15} /> FEATURED TOPIC
              </span>
            </div>

            <div className="blog-featured-content">
              <span className="section-label">COMING SOON</span>
              <h2>
                Technology that solves real business challenges.
              </h2>
              <p>
                Our insights will explore practical technology ideas,
                development approaches, and digital solutions for modern
                organizations.
              </p>
              <span className="blog-preview-note">
                This is a preview of the upcoming editorial section.
              </span>
              <Link href="/contact" className="inline-link">
                Connect with our team <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section blog-articles-section" id="latest-insights">
        <div className="container">
          <motion.div
            className="blog-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div>
              <span className="section-label">EXPLORE OUR TOPICS</span>
              <h2 className="section-title">Technology insights</h2>
              <p className="section-description">
                Browse the subjects planned for the Right Tech insights
                library.
              </p>
            </div>

            <div className="blog-search">
              <Search size={18} />
              <input
                type="search"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search insight topics"
              />
            </div>
          </motion.div>

          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`blog-category-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-articles-grid">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => {
                const Icon = article.icon;

                return (
                  <motion.article
                    className="blog-article-card"
                    key={article.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                  >
                    <div className="blog-article-image">
                      <img src={article.image} alt="" loading="lazy" />
                      <span className="blog-article-icon">
                        <Icon size={19} />
                      </span>
                    </div>

                    <div className="blog-article-content">
                      <span className="blog-article-category">
                        {article.category}
                      </span>

                      <h3>{article.title}</h3>
                      <p>{article.description}</p>

                      <div className="blog-article-footer">
                        <span>{article.readTime}</span>
                        <span className="blog-coming-soon">
                          Coming soon
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })
            ) : (
              <div className="blog-empty-state">
                <Search size={30} />
                <h3>No matching topics found</h3>
                <p>Try another search term or choose a different category.</p>
                <button
                  className="blog-reset-btn"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="section blog-cta-section">
        <div className="container">
          <div className="blog-cta">
            <div className="blog-cta-icon">
              <BookOpen size={27} />
            </div>

            <div className="blog-cta-content">
              <span className="section-label">STAY CONNECTED</span>
              <h2>Curious about a technology solution?</h2>
              <p>
                Have a question or a topic you'd like us to explore? We'd be
                happy to hear from you.
              </p>
            </div>

            <Link href="/contact" className="primary-btn">
              Talk to Us <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
