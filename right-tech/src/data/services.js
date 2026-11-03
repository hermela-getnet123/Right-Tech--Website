
export const services = [
  {
    slug: "telecom-value-added-services",
    number: "01",
    title: "Telecom Value-Added Services (VAS)",
    shortDescription:
      "Technology services connected to value-added services in the telecommunications sector.",
    description:
      "Explore Right Tech Consulting's Telecom Value-Added Services area. Contact the team to discuss your requirements and confirm the specific services, integrations, and delivery scope available.",
    discussionPoints: [
      "Your telecom or digital service requirements",
      "The systems and platforms involved",
      "Integration needs and technical considerations",
      "Project scope and implementation expectations",
    ],
  },
  {
    slug: "custom-software-development",
    number: "02",
    title: "Custom Software Development",
    shortDescription:
      "Software development tailored to specific business and organizational requirements.",
    description:
      "Discuss software needs that are specific to your organization. The right solution depends on your workflows, users, existing systems, and project requirements.",
    discussionPoints: [
      "The business problem you want to address",
      "The users and workflows the software should support",
      "Required features and system integrations",
      "Project scope and future maintenance needs",
    ],
  },
  {
    slug: "mobile-application-development",
    number: "03",
    title: "Mobile Application Development",
    shortDescription:
      "Mobile application development for ideas, services, and business needs.",
    description:
      "Explore your mobile application requirements with Right Tech Consulting. Discuss the intended users, purpose, platforms, and functionality before defining the project scope.",
    discussionPoints: [
      "The purpose and target users of the application",
      "The mobile platforms required",
      "The functionality and user experience",
      "Connections to existing systems or services",
    ],
  },
  {
    slug: "website-development",
    number: "04",
    title: "Website Development",
    shortDescription:
      "Website development based on an organization's goals and online requirements.",
    description:
      "Discuss the type of website your organization needs, its intended audience, content, and required functionality. The final scope can be established around your specific objectives.",
    discussionPoints: [
      "The website's purpose and target audience",
      "Pages, content, and required functionality",
      "Design and user experience expectations",
      "Domain, hosting, and ongoing support requirements",
    ],
  },
  {
    slug: "technology-consulting-services",
    number: "05",
    title: "Technology Consulting Services",
    shortDescription:
      "Technology-related consultation to help organizations assess their needs and plans.",
    description:
      "Technology decisions should be based on an organization's actual needs and constraints. Contact the team to discuss your current situation and the type of technical guidance you require.",
    discussionPoints: [
      "Your current technology environment",
      "The challenges you are trying to solve",
      "Possible technical approaches",
      "Project priorities and requirements",
    ],
  },
  {
    slug: "cloud-solutions-and-migration",
    number: "06",
    title: "Cloud Solutions and Migration",
    shortDescription:
      "Cloud-related solutions and migration requirements for organizations.",
    description:
      "Discuss your organization's cloud requirements, existing infrastructure, and migration objectives. The appropriate approach depends on your systems, data, and operational needs.",
    discussionPoints: [
      "Your current infrastructure and applications",
      "Cloud requirements and objectives",
      "Migration scope and dependencies",
      "Operational and support considerations",
    ],
  },
  {
    slug: "testing-services",
    number: "07",
    title: "Testing Services",
    shortDescription:
      "Software and system testing requirements for technology projects.",
    description:
      "Discuss the testing needs of your software or system. The testing approach and scope should be determined according to the project, its requirements, and the expected outcomes.",
    discussionPoints: [
      "The software or system to be tested",
      "The expected behavior and requirements",
      "Testing scope and priorities",
      "Reporting and issue follow-up expectations",
    ],
  },
  {
    slug: "support-services",
    number: "08",
    title: "Support Services",
    shortDescription:
      "Support-related requirements for software, systems, and technology solutions.",
    description:
      "Every organization has different support needs. Contact Right Tech Consulting to discuss the system involved, the type of assistance required, and the available support arrangements.",
    discussionPoints: [
      "The software or system requiring support",
      "The issue or assistance required",
      "Support expectations and priorities",
      "Ongoing maintenance requirements",
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
