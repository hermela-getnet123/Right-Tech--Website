
"use client";

import { clients } from "@/data/clients";

export default function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-heading">
          <span className="section-label">OUR CLIENTS & PARTNERS</span>
          <h2>Organizations We've Worked With</h2>
          <p>
            Building relationships through technology and collaboration.
          </p>
        </div>
      </div>

      <div className="clients-slider">
        <div className="clients-track">
          {[...clients, ...clients].map((client, index) => (
            <div
              className="client-logo-card"
              key={`${client.name}-${index}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
