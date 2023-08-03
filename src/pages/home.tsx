import { Shake } from "../ui/shake";
import { Header1, Header4, Header6, Paragraph } from "../ui/typography";

import { Toggle } from "../ui/Toggle";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContextProvider";

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
      <Header6 color="primary-alt">
        If you want to take a look, here are the design tokens being used:
      </Header6>
      <a href="typography/"> Typography </a>
      <a href="logos/"> Logos </a>
    </div>
  );
};
