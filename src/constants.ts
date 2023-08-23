
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
    title: "IT Journey: Transformative Mentorship Project",
    months: 9,
    industries: ["mentorship"],
    tags: ["mentor", "frontend", "team leader"],
    text: "Led a transformative project by guiding a team of four people, who were completely new to the field of IT, to pave their way into the job market. As a mentor and leader, the team consisting of me, three other mentors, and the direct support of an HR person undertook the crucial responsibility of equipping them with the necessary skills. Through a strategic approach, we harnessed their potential, enabling them to contribute meaningfully. At the core of this endeavor was an internal project, carefully overseen by me. I meticulously laid out task specifications, fostering a clear understanding of objectives and expectations. Collaboratively, the tasks were refined and discussed, to be sure that the team was aware of the requirements, so they could have the best execution approach available to them. This dual role as both product owner and project manager encapsulates my commitment to foster growth, refining leadership, and driving impactful outcomes. Through mentorship and hands-on guidance, we collectively transformed novice individuals into competent contributors while also achieving the project's milestones.",
    shortText:
      "Guided a novice IT team, transforming them for the job market, leading an internal project, and fostering growth through mentorship.",
  },
  {
    title: "Fast-Food Tech Evolution: React to React Native",
    months: 22,
    industries: ["restaurant", "fast-food"],
    tags: [
      "React",
      "React Native",
      "NodeJS",
      "Typescript",
      "Styled Components",
      "whitelabel",
      "GraphQL",
      "frontend",
    ],
    text: "I've worked on a significant project for a prominent fast-food corporation, leveraging React, React Native and styled components technologies. I've played a crucial role in ensuring seamless business rule integration while contributing to the migration of their application from React to React Native. The responsibilities encompassed managing complex migrations, guaranteeing the fidelity of business logic, and facilitating a smooth transition between platforms. Additionally, collaborated closely with the development team to create and implement essential components, enhancing the overall user experience.",
    shortText:
      "Played a key role in seamless React to React Native migration for a major fast-food corporation, enhancing user experience.",
  },
  {
    title: "Robust React Native: Advancing Precision Health", // 'Innovative Health Solutions: Data-Driven React Native',
    months: 6,
    industries: ["healthcare", "startup"],
    tags: [
      "React",
      "React Native",
      "NodeJS",
      "Typescript",
      "Styled Components",
      "AWS",
      "stripe",
      "serverless",
      "full-stack",
      "hybrid",
    ],
    text: "Engaged with a forward-thinking startup operating in the health sector, where I played a pivotal role in developing a robust mobile application using React Native. Leveraged serverless architecture on AWS Lambda to ensure secure and efficient data processing. Managed sensitive health-related data and tackled intricate health-related calculations integral to the application's functionality, ensuring accurate and reliable results. Styled Components and Reanimated were utilized to create a polished and user-friendly interface, enhancing the overall user experience and contributing to the startup's mission of providing innovative solutions in the healthcare domain.",
    shortText:
      "Contributed to a robust React Native health app, leveraging AWS Lambda, precise calculations, and polished interface for a startup's healthcare mission.",
  },
  {
    title: "Fueling Fitness Company Success: Full-Stack Expertise",
    months: 14,
    industries: ["fitness"],
    tags: [
      "React",
      "ELM",
      "Elixir",
      "PHP",
      "SaSS",
      "microservices",
      "fullstack",
      "frontend",
      "backend",
    ],
    text: "Worked as a Full-stack developer for a fast-growing fitness company with $80M+ revenue per year, using a diverse stack for both frontend and backend. Responsible for creating and maintaining functionalities, developing technical solution, and delivering in production, in websites using ELM, React, Sass, and CSS animations, following BEM methodology, supporting a variety of devices and browsers, building everything responsive with a mobile-first approach, following a Design Systems documented in Figma. On the backend side, I've helped adding new API endpoints using elixir, and migrating the monolith server using PHP to microservices with Elixir.",
    shortText:
      "Full-stack role in a high-revenue fitness company, using diverse tech stack, responsive design, and Elixir-backed backend solutions.",
  },
  {
    title: "Building a Real Estate Platform with a Full-Stack Initiative",
    months: 6,
    industries: ["real estate", "back office", "startup"],
    tags: ["React", "Elixir", "Typescript", "SaSS", "full-stack"],
    text: "As a Full-stack developer, I initiated the frontend development of a real estate transactions platform from scratch. Employing React with Typescript, ESLint, Prettier, and Sass while adhering to BEM principles, I crafted the tool for managing real estate transactions. This involved implementing a design system and maintaining a StoryBook client to document and referencing existing components. On the backend, I've created a data migration solution for a comprehensive back-office management product tailored for real estate operations. Leveraging Elixir with Phoenix, I've worked on the migration of intricate data from various spreadsheets, effectively preserving essential relationships and enabling smooth transition to the new system.",
    shortText:
      "Initiated frontend development of real estate platform, employed React, and managed full migration with Elixir for a back-office system.",
  },
  {
    title: "Creating MVP: Front End Excellence for Global Market",
    months: 4,
    industries: ["startup"],
    tags: ["React", "Apollo", "GraphQL", "Typescript", "SaSS", "frontend"],
    text: "Worked with a small front end team in creating a MVP that was later released to production, involving sensitive data to an international market. Created components extending Material-UI, following BEM, and connecting the backend with Apollo. Used a mobile-first approach, handling the app’s state with Redux and creating multiple complex form",
    shortText:
      "Collaborated on MVP release for international market, building sensitive-data app with Material-UI, Redux, and Apollo connectivity.",
  },
];
