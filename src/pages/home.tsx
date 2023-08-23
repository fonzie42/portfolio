import { useContext } from "react";

import { Shake } from "ui/shake";
import { Header1, Header2, Header4, Header6, Paragraph } from "ui/typography";

import { Toggle } from "ui/Toggle";
import { ThemeContext } from "context/theme-context-provider";
import { EXPERIENCES } from "constants";
import { Experience } from "components/Experience";
import { ExperienceWrapper } from "./home.styled";

export const Home = () => {
  const { toggleThemeCallback, theme } = useContext(ThemeContext);

  return (
    <div>
      <Toggle
        checked={theme === "dark"}
        onToggleCallback={toggleThemeCallback}
      />

      <Header1 color="primary-alt">
        Hey <Shake>👋🏻</Shake> I'm Afonso
      </Header1>
      <Header6 color="primary-alt">
        And this page is still a work in progress!
      </Header6>

      <Header4 color="primary-alt">
        I am a Dev @ Ambush. I can help you design your product, develop your
        brand, or systematize your design flow.
      </Header4>

      <Paragraph>
        Hey there! I'm Afonso, a software developer who's all about making
        awesome user experiences and delivering rock-solid software. My thing is
        understanding what users need and building apps that just make sense.
        Seriously, a happy user is the heart of great software.
      </Paragraph>

      <Paragraph>
        I stick to the best rules of the software game, testing like a pro and
        sweating the details. Teamwork and talking? You bet. I love joining up
        with all sorts of teams to make projects shine.
      </Paragraph>

      <Paragraph>
        And it doesn't stop when we launch. I'm all about keeping apps in
        tip-top shape and ready for whatever's next. Inside my portfolio, you'll
        see projects that show how seriously I take my work. Give it a look and
        see how I can bring a boost to your software projects.
      </Paragraph>

      <Paragraph>
        Oh, and a bit about me: I'm a pro at getting what different businesses
        need, no matter the industry – restaurants, farming, real estate,
        banking, startups, you name it. I'm adaptable, ready to jump into any
        team. I'm all about quality, making sure what I deliver is top-notch and
        user-friendly.
      </Paragraph>
      <Paragraph>
        Thank you for visiting, and I look forward to the opportunity to
        collaborate on exciting projects together.
      </Paragraph>

      <ExperienceWrapper>
        <Header2>My Recent Experiences</Header2>
      </ExperienceWrapper>

      {EXPERIENCES.map((item) => (
        <Experience {...item} />
      ))}

      <Header6 color="primary-alt">
        If you want to take a look, here are the design tokens being used:
      </Header6>

      <a href="typography/"> Typography </a>
      <a href="logos/"> Logos </a>
    </div>
  );
};
