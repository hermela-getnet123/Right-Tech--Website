
import { teamMembers } from "@/data/team";
import { Linkedin, Github, Facebook, ArrowUpRight } from "lucide-react";

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  facebook: Facebook,
};

export default function TeamSection({ compact = false }) {
  const members = compact ? teamMembers.slice(0, 3) : teamMembers;

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="team-heading">
          <span className="section-label">THE PEOPLE BEHIND RIGHT TECH</span>
          <h2>Meet Our Team</h2>
          <p>
            Meet the people contributing their skills and expertise to
            Right Tech Consulting.
          </p>
        </div>

        <div className="team-grid">
          {members.map((member, index) => (
            <article className="team-card" key={member.name}>
              <div className="team-image-wrap">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  className="team-image"
                  loading="lazy"
                />
                <span className="team-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="team-card-content">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.description}</p>

                <div className="team-socials">
                  {Object.entries(member.social).map(([platform, url]) => {
                    if (!url) return null;
                    const Icon = socialIcons[platform];
                    if (!Icon) return null;

                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${platform}`}
                      >
                        <Icon size={17} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
