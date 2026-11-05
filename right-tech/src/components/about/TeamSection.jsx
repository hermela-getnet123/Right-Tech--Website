
import { teamMembers } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="team-heading">
          <span className="section-label">THE PEOPLE BEHIND RIGHT TECH</span>
          <h2>Meet Our Team</h2>
          <p>
            Meet the people whose skills and contributions help bring
            technology solutions to life.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
