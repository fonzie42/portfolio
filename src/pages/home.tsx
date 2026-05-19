import { useContext } from "react";

import { Shake } from "ui/shake";
import { Header1, Header2, Header4, Header6, Paragraph } from "ui/typography";

import { Toggle } from "ui/Toggle";
import { ThemeContext } from "context/theme-context-provider";
import { EXPERIENCES } from "constants";
import { Experience } from "components/Experience";
import { AnimatedMingoFull } from "components/AnimatedMingoLogo";
import { ExperienceWrapper } from "./home.styled";

export const Home = () => {
  const { toggleThemeCallback, theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div>
      <Toggle
        checked={isDark}
        onToggleCallback={toggleThemeCallback}
      />

      <AnimatedMingoFull size={180} wave />

      <Header1 color="primary-alt">
        Hey <Shake>👋🏻</Shake> I'm Afonso
      </Header1>

      <Header4 color="primary-alt">
        Engineering Manager at Ravn. Full-stack developer turned people leader,
        focused on delivery, team health, and engineering quality.
      </Header4>

      <Paragraph>
        I'm a software engineer and engineering manager based in Brazil, with 8+
        years of experience building web and mobile applications. I've worked
        across fintech, healthcare, real estate, fitness, and enterprise, always
        focused on delivering reliable software and great user experiences.
      </Paragraph>

      <Paragraph>
        My stack is rooted in React, React Native, and TypeScript, but I've
        built backends with Elixir, Node.js, and serverless architectures too.
        I care about testing, design systems, and writing code that teams can
        maintain long after the first deploy.
      </Paragraph>

      <Paragraph>
        Today I lead cross-functional teams across multiple client engagements
        at Ravn, a software consultancy. I bridge the gap between engineering,
        product, and stakeholders, while also shaping the frameworks that define
        how engineering management works at the company. I hold a Computer
        Science degree from UFRGS and speak Portuguese, English, and Spanish.
      </Paragraph>

      <ExperienceWrapper>
        <Header2>Experience</Header2>
      </ExperienceWrapper>

      {EXPERIENCES.map((item) => (
        <Experience {...item} />
      ))}

      <Header6 color="primary-alt">
        If you want to take a look at the design tokens being used:
      </Header6>

      <a href="design-system/"> Design System </a>
    </div>
  );
};
