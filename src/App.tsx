import mingoExtraSmall from "/logo/mingo_extra_small.svg";
import mingoMonochrome from "/logo/mingo_monochrome.svg";
import mingoSimplified from "/logo/mingo_simplified.svg";
import mingoSmall from "/logo/mingo_small.svg";
import mingo from "/logo/mingo.svg";
import mingoExtraSmallDark from "/logo/mingo_extra_small_dark.svg";
import mingoMonochromeDark from "/logo/mingo_monochrome_dark.svg";
import mingoSimplifiedDark from "/logo/mingo_simplified_dark.svg";
import mingoSmallDark from "/logo/mingo_small_dark.svg";
import mingoDark from "/logo/mingo_dark.svg";
import { ThemeProvider } from "styled-components";

import "./App.css";
import {
  Button,
  Code,
  Description,
  Header0,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Paragraph,
  Subtitle,
  TextWrapper,
  TypographyWrapper,
} from "./ui/typography";
import { GlobalStyle } from "./theme/globalStyle";
import { Logo } from "./ui/logo";
import { COLORS, COLORS_DARK_MODE } from "./ui/colors";
import { useState } from "react";

import { Toggle } from "./ui/Toggle";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const isDarkThemeSelected = theme === "dark";
  const onToggleCallback = () =>
    setTheme(isDarkThemeSelected ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkThemeSelected ? COLORS_DARK_MODE : COLORS}>
      <Toggle
        checked={isDarkThemeSelected}
        onToggleCallback={onToggleCallback}
      />

      <GlobalStyle />
      <div>
        <Header1 color="primary-alt">Hiya 👋🏻 I'm Afonso </Header1>
        <Header6 color="primary-alt">
          And this page is still a work in progress!
        </Header6>
        <Header4 color="primary-alt">
          I am a Dev @ Ambush. I can help you design your product, develop your
          brand, or systematize your design flow.
        </Header4>

        <Paragraph>
          Welcome to my portfolio! I'm Afonso, a software developer with a
          passion for creating great user experiences and delivering reliable
          software. My focus is on understanding users' needs and preferences to
          develop intuitive and functional applications. I believe a positive
          user experience is crucial for any successful software.
        </Paragraph>
        <Paragraph>
          I adhere to industry best practices, conduct thorough testing, and
          maintain a keen eye for detail to deliver robust and bug-free
          solutions. Effective communication and collaboration are essential to
          me. I enjoy working with cross-functional teams to ensure project
          success.
        </Paragraph>
        <Paragraph>
          Beyond the initial release, I actively monitor and maintain
          applications to keep them performing optimally and adapt to changing
          requirements. In this portfolio, you'll find projects that showcase my
          commitment to excellence. I invite you to explore my work and see how
          I can elevate your software development endeavors.
        </Paragraph>
        <Paragraph>
          Thank you for visiting, and I look forward to the opportunity to
          collaborate on exciting projects together.
        </Paragraph>
      </div>
      <div>
        <Logo
          src={isDarkThemeSelected ? mingoExtraSmallDark : mingoExtraSmall}
          className="logo react"
          alt="React logo"
        />

        <Logo
          src={isDarkThemeSelected ? mingoMonochromeDark : mingoMonochrome}
          className="logo react"
          alt="React logo"
        />

        <Logo
          src={isDarkThemeSelected ? mingoSimplifiedDark : mingoSimplified}
          className="logo react"
          alt="React logo"
        />

        <Logo
          src={isDarkThemeSelected ? mingoSmallDark : mingoSmall}
          className="logo react"
          alt="React logo"
        />

        <Logo
          src={isDarkThemeSelected ? mingoDark : mingo}
          className="logo react"
          alt="React logo"
        />
      </div>
      <div>
        <TypographyWrapper>
          <Description color="alt">H0</Description>
          <TextWrapper>
            <Header0>Display </Header0>
            <Subtitle color="alt">
              Playfair Display / Black / 130 px / 9 em
            </Subtitle>
          </TextWrapper>
        </TypographyWrapper>

        <TypographyWrapper>
          <Description color="alt">H1</Description>
          <TextWrapper>
            <Header1>Header 1 </Header1>
            <Subtitle color="alt">Inter / Bold / 72 px / 5 em</Subtitle>
          </TextWrapper>
        </TypographyWrapper>

        <TypographyWrapper>
          <Description color="alt">H2 </Description>
          <TextWrapper>
            <Header2>Header 2 </Header2>
            <Subtitle color="alt">
              Playfair Display / Regular / 58 px / 4em
            </Subtitle>
          </TextWrapper>
        </TypographyWrapper>

        <TypographyWrapper>
          <Description color="alt">H3 </Description>
          <TextWrapper>
            <Header3>Header 3</Header3>
            <Subtitle color="alt">
              Playfair Display / Regular / 44 px / 3 em
            </Subtitle>
          </TextWrapper>
        </TypographyWrapper>

        <TypographyWrapper>
          <Description color="alt">H4 </Description>
          <TextWrapper>
            <Header4>Header 4</Header4>
            <Subtitle color="alt">
              Playfair Display / Regular / 36 px / 2.5 em
            </Subtitle>
          </TextWrapper>
        </TypographyWrapper>

        <TypographyWrapper>
          <Description color="alt">H5 </Description>
          <TextWrapper>
            <Header5>Header 5</Header5>
            <Subtitle color="alt">
              Playfair Display / Regular / 30 px / 2 em
            </Subtitle>
          </TextWrapper>
        </TypographyWrapper>

        <TypographyWrapper>
          <Description color="alt">H6 </Description>
          <TextWrapper>
            <Header6>Header 6</Header6>
            <Subtitle color="alt">
              Playfair Display / Regular / 18 px / 1.25 em
            </Subtitle>
          </TextWrapper>
        </TypographyWrapper>

        <TypographyWrapper>
          <Description color="alt">P </Description>
          <TextWrapper>
            <Paragraph>Paragraph </Paragraph>
            <Subtitle color="alt">Inter / Regular / 22 px / 1.5 em</Subtitle>
          </TextWrapper>
        </TypographyWrapper>

        <TypographyWrapper>
          <Description color="alt">CODE </Description>
          <TextWrapper>
            <Code>Code </Code>
            <Subtitle color="alt">
              Noto Sans Mono / Regular / 22 px / 1.5 em
            </Subtitle>
          </TextWrapper>
        </TypographyWrapper>

        <TypographyWrapper>
          <Description color="alt">BTN </Description>
          <TextWrapper>
            <Button>Button </Button>
            <Subtitle color="alt">Inter / Medium / 24 px / 1.75 em</Subtitle>
          </TextWrapper>
        </TypographyWrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
