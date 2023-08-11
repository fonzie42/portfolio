import { useContext } from "react";

import { Shake } from "ui/shake";
import { Header1, Header2, Header4, Header6, Paragraph } from "ui/typography";

import { Toggle } from "ui/Toggle";
import { ThemeContext } from "context/theme-context-provider";

export const Home = () => {
  const { toggleThemeCallback, theme } = useContext(ThemeContext);

  return (
    <div>
      <Toggle
        checked={theme === "dark"}
        onToggleCallback={toggleThemeCallback}
      />

      <Header1 color="primary-alt">
        Hiya <Shake>👋🏻</Shake> I'm Afonso
      </Header1>
      <Header6 color="primary-alt">
        And this page is still a work in progress!
      </Header6>

      <Header4 color="primary-alt">
        I am a Dev @ Ambush. I can help you design your product, develop your
        brand, or systematize your design flow.
      </Header4>
      <Paragraph>
        Welcome to my portfolio! I'm Afonso, a software developer with a passion
        for creating great user experiences and delivering reliable software. My
        focus is on understanding users' needs and preferences to develop
        intuitive and functional applications. I believe a positive user
        experience is crucial for any successful software.
      </Paragraph>
      <Paragraph>
        I adhere to industry best practices, conduct thorough testing, and
        maintain a keen eye for detail to deliver robust and bug-free solutions.
        Effective communication and collaboration are essential to me. I enjoy
        working with cross-functional teams to ensure project success.
      </Paragraph>
      <Paragraph>
        Beyond the initial release, I actively monitor and maintain applications
        to keep them performing optimally and adapt to changing requirements. In
        this portfolio, you'll find projects that showcase my commitment to
        excellence. I invite you to explore my work and see how I can elevate
        your software development endeavors.
      </Paragraph>
      <Paragraph>
        Thank you for visiting, and I look forward to the opportunity to
        collaborate on exciting projects together.
      </Paragraph>

      <Header2>My Recent Experiences</Header2>

      <Paragraph>
        I've worked on a significant project for a prominent fast-food
        corporation, leveraging React, React Native and styled components
        technologies. I've played a crucial role in ensuring seamless business
        rule integration while contributing to the migration of their
        application from React to React Native. The responsibilities encompassed
        managing complex migrations, guaranteeing the fidelity of business
        logic, and facilitating a smooth transition between platforms.
        Additionally, collaborated closely with the development team to create
        and implement essential components, enhancing the overall user
        experience.
      </Paragraph>

      <Paragraph>
        Engaged with a forward-thinking startup operating in the health sector,
        where I played a pivotal role in developing a robust mobile application
        using React Native. Leveraged serverless architecture on AWS Lambda to
        ensure secure and efficient data processing. Managed sensitive
        health-related data and tackled intricate health-related calculations
        integral to the application's functionality, ensuring accurate and
        reliable results. Styled Components and Reanimated were utilized to
        create a polished and user-friendly interface, enhancing the overall
        user experience and contributing to the startup's mission of providing
        innovative solutions in the healthcare domain.
      </Paragraph>

      <Paragraph>
        Worked as a Full-stack developer for a fast-growing fitness company with
        $80M+ revenue per year, using a diverse stack for both frontend and
        backend. Responsible for creating and maintaining functionalities,
        developing technical solution, and delivering in production, in websites
        using ELM, React, Sass, and CSS animations, following BEM methodology,
        supporting a variety of devices and browsers, building everything
        responsive with a mobile-first approach, following a Design Systems
        documented in Figma. On the backend side, I've helped adding new API
        endpoints using elixir, and migrating the monolith server using PHP to
        microservices with Elixir.
      </Paragraph>

      <Paragraph>
        As a Full-stack developer, I initiated the frontend development of a
        real estate transactions platform from scratch. Employing React with
        Typescript, ESLint, Prettier, and Sass while adhering to BEM principles,
        I crafted the tool for managing real estate transactions. This involved
        implementing a design system and maintaining a StoryBook client to
        document and referencing existing components. On the backend, I've
        created a data migration solution for a comprehensive back-office
        management product tailored for real estate operations. Leveraging
        Elixir with Phoenix, I've worked on the migration of intricate data from
        various spreadsheets, effectively preserving essential relationships and
        enabling smooth transition to the new system.
      </Paragraph>

      <Paragraph>
        Worked with a small front end team in creating a MVP that was later
        released to production, involving sensitive data to an international
        market. Created components extending Material-UI, following BEM, and
        connecting the backend with Apollo. Used a mobile-first approach,
        handling the app’s state with Redux and creating multiple complex forms.
      </Paragraph>

      <Header6 color="primary-alt">
        If you want to take a look, here are the design tokens being used:
      </Header6>

      <a href="typography/"> Typography </a>
      <a href="logos/"> Logos </a>
    </div>
  );
};
