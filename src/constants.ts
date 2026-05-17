
export type ExperienceData = {
  title: string;
  months: number;
  industries: string[];
  tags: string[];
  text: string;
  shortText: string;
};

export const EXPERIENCES: ExperienceData[] = [
  {
    title: "Engineering Manager at Ravn",
    months: 4,
    industries: ["consultancy", "AI", "mobile", "hardware"],
    tags: [
      "engineering management",
      "React Native",
      "Expo",
      "NestJS",
      "GraphQL",
      "AI tooling",
      "DORA metrics",
      "team leadership",
    ],
    text: "Serving as the first Engineering Manager at Ravn, a software consultancy, building the role and its frameworks from scratch. Leading a cross-functional team across multiple concurrent client engagements simultaneously, each with distinct tech stacks and stakeholder dynamics. Current projects span BLE/WiFi-connected hardware with mobile apps (React Native, Expo SDK 54), backend services (NestJS, GraphQL), and cloud infrastructure. Day-to-day work combines hands-on technical context with structured people management: running regular 1:1s, shaping team processes, and serving as the bridge between engineers, product managers, and client stakeholders. Beyond client delivery, facilitating Ravn's internal Labs program, a structured cohort initiative focused on AI adoption and engineering capability growth across the organization. Separately, building the foundational frameworks that define the EM function at Ravn in close collaboration with the Head of Engineering: engineering health metrics grounded in DORA research (from Accelerate), RACI-based role definitions, and evaluation rubrics using a BARS-based scoring system for both individual and team performance. Also leading structured AI adoption initiatives across the organization, conducting 1:1 calls with teams to assess and accelerate their use of AI tooling in their workflows.",
    shortText:
      "First Engineering Manager at Ravn, defining the role from scratch while leading multiple concurrent client engagements and driving org-wide AI adoption initiatives.",
  },
  {
    title: "Engineering Manager at payfy",
    months: 26,
    industries: ["fintech", "corporate expense management", "banking"],
    tags: [
      "engineering management",
      "Elixir",
      "React",
      "Typescript",
      "Sentry",
      "PostHog",
      "whitelabel",
      "AI workflows",
      "solutions architecture",
      "test planning",
    ],
    text: "Operated at the intersection of product vision and technical execution as both Engineering Manager and Solutions Architect at a leading corporate expense management provider. Led a team of 15+ people: 3 backend developers (Elixir), 3 frontend developers (React, TypeScript), 2 mobile developers, 1 engineering team developer, 3 designers, 2 QA engineers, and 1 scrum master. Owned the end-to-end blueprint for the company's budget management system, a core product feature. This was not basic expense tracking; it involved architecting complex multi-tiered hierarchy rules to control corporate spending across organizational levels, establishing real-time notification triggers, and defining strict API specifications capable of handling high-volume data validation for financial transactions. Drove the critical integration with Banco do Brasil, Brazil's largest public bank and one of the company's main partners. This meant deciphering complex legacy and modern banking protocols, writing definitive technical documentation for the data pipeline, and working directly with the bank's stakeholders to ensure the integration was bulletproof. Maintained regular contact with the CEO, the C-level head of Customer Success, and the full C-suite through weekly executive meetings. Participated in annual planning sessions with all C-suite members, aligning engineering capacity with business strategy for the year ahead. On the engineering side, spearheaded performance optimization by unifying API preload workflows, reducing data-fetching redundancy and improving system response times. Designed and implemented strict validation workflows for incoming requests to secure financial endpoints and prevent bad data from reaching the database. Led a major refactoring project to separate two similar applications into a whitelabel solution with multiple shared libraries, streamlining development and maintenance across different brands. Authored detailed test plans and drove their implementation to ensure application reliability and robustness across the platform. Built the team's observability stack with Sentry for error tracking and PostHog for product analytics and user behavior tracking. Championed the shift toward AI-native engineering workflows, introducing automated code reviews and unit test generation to maximize engineering throughput without compromising architectural integrity.",
    shortText:
      "Led a 15+ person team as hybrid EM and Solutions Architect at a fintech company, architecting core product systems and interfacing directly with C-suite executives and Banco do Brasil.",
  },
  {
    title: "Full Stack Engineer at Ambush",
    months: 39,
    industries: ["restaurant", "fast-food", "healthcare", "mentorship"],
    tags: [
      "React",
      "React Native",
      "NodeJS",
      "Typescript",
      "Styled Components",
      "GraphQL",
      "AWS",
      "serverless",
      "mentorship",
    ],
    text: "Three years across three distinct engagements, each demanding a different combination of technical depth and leadership. The longest was a pivotal project with a prominent fast-food corporation, employing React, React Native, and styled components. Played a key role in migrating the client's application from React to React Native, managing complex platform transitions while preserving the fidelity of intricate business logic. Collaborated closely with the development team to create and implement essential components, and worked on seamless business rule integration to enhance the overall user experience across platforms. At a forward-thinking health startup, developed a robust React Native mobile application from the ground up. Leveraged AWS Lambda's serverless architecture to ensure secure and efficient data processing for sensitive health information. Handled intricate health-related calculations integral to the app's functionality, ensuring accurate and reliable results. Used Styled Components and Reanimated to build a polished, animated interface that aligned with the startup's mission of making healthcare more accessible. Also led a transformative mentorship initiative, guiding a team of four people who were completely new to the IT field into the job market. With the support of three other mentors and an HR specialist, oversaw an internal project end-to-end, acting as both Product Owner and Project Manager. Defined task specifications, facilitated collaborative refinement sessions, and ensured the team understood requirements well enough to execute effectively. The result: all four newcomers transitioned into competent contributors and secured positions in the industry.",
    shortText:
      "Three years spanning a major fast-food platform migration, a healthcare startup's mobile app on AWS, and a mentorship program that launched four careers in tech.",
  },
  {
    title: "Fullstack Developer at DeepX",
    months: 21,
    industries: ["fitness", "real estate", "back office"],
    tags: [
      "React",
      "ELM",
      "Elixir",
      "PHP",
      "SaSS",
      "microservices",
      "Typescript",
      "StoryBook",
      "full-stack",
    ],
    text: "Full-stack development across two concurrent projects at a software studio, each with its own stack and domain. The primary engagement was with a fast-growing fitness company generating $80M+ in annual revenue. Built and maintained production websites using ELM, React, Sass, and CSS animations, following BEM methodology and a Design System documented in Figma. Every page was built responsive with a mobile-first approach, supporting a wide variety of devices and browsers. On the backend, contributed new API endpoints in Elixir and participated in the migration of the company's monolith PHP server to a microservices architecture using Elixir, improving scalability and maintainability. The second project involved initiating the frontend development of a real estate transactions platform from scratch. Built the entire frontend using React with TypeScript, ESLint, Prettier, and Sass while adhering to BEM principles. Implemented a design system and maintained a StoryBook client to document and reference all existing components, ensuring consistency across the application. On the backend, created a data migration solution for a comprehensive back-office management product tailored for real estate operations. Using Elixir with Phoenix, migrated intricate data from various spreadsheets into the new system, preserving essential relationships between entities and enabling a smooth transition for the client's operations.",
    shortText:
      "Full-stack work at a $80M+ fitness company (ELM, React, Elixir microservices) and a real estate platform built from scratch with React, TypeScript, and Elixir.",
  },
  {
    title: "Future Face at Isobar",
    months: 7,
    industries: ["marketing", "advertising"],
    tags: ["React", "HTML", "CSS", "frontend", "pixel-perfect"],
    text: "Selected for Isobar's acceleration program (Future Face), a competitive initiative designed to fast-track junior developers into production-ready engineers. Worked as a frontend developer in a small team on two tracks: an internal project involving Spotify API integration, and production-ready pixel-perfect websites for international marketing companies. The external work ranged from static HTML and CSS implementations to dynamic React web pages, all held to strict visual fidelity standards against design specifications. This role built the foundation for professional frontend development, with an emphasis on precision, attention to detail, and delivering under tight agency timelines.",
    shortText:
      "Selected for Isobar's competitive acceleration program, building pixel-perfect websites for international marketing companies and an internal Spotify integration.",
  },
  {
    title: "Junior Developer at SAP (Rotation Program)",
    months: 18,
    industries: ["farming", "agriculture", "enterprise"],
    tags: [
      "SAPUI5",
      "frontend",
      "QUnit",
      "OPA5",
      "automated testing",
      "legacy browsers",
    ],
    text: "Part of SAP's Rotation Program in Porto Alegre, working as a frontend developer on a farming portal that integrated with SAP's enterprise services. The portal helped farm owners track their products through the entire production chain, providing visibility from origin to delivery. Built the frontend using SAPUI5, supporting multiple devices and legacy browsers that were standard in agricultural operations. Became the team's go-to person for automated testing, writing unit and integration tests using QUnit and OPA5. Took ownership of testing culture within the team, teaching other developers how to write tests and establishing best practices for test automation. This early focus on testing quality and knowledge-sharing set the tone for the rest of my career.",
    shortText:
      "Frontend developer on SAP's farming portal, championing automated testing with QUnit and OPA5 and establishing testing best practices across the team.",
  },
];
