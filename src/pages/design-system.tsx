import { useContext, useState, useRef, useEffect, useCallback } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { ThemeContext } from "context/theme-context-provider";
import { Toggle } from "ui/Toggle";
import { Badge } from "ui/Badge";
import { Experience } from "components/Experience";
import { COLORS, COLORS_DARK_MODE } from "ui/colors";
import {
  Header0,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Paragraph,
  Code,
  Button,
} from "ui/typography";

import mingo from "/logo/mingo.svg";
import mingoSimplified from "/logo/mingo_simplified.svg";
import mingoMonochrome from "/logo/mingo_monochrome.svg";
import mingoSmall from "/logo/mingo_small.svg";
import mingoExtraSmall from "/logo/mingo_extra_small.svg";
import mingoDark from "/logo/mingo_dark.svg";
import mingoSimplifiedDark from "/logo/mingo_simplified_dark.svg";
import mingoMonochromeDark from "/logo/mingo_monochrome_dark.svg";
import mingoSmallDark from "/logo/mingo_small_dark.svg";
import mingoExtraSmallDark from "/logo/mingo_extra_small_dark.svg";

import {
  PageWrapper,
  PageHeader,
  BackLink,
  Section,
  SectionTitle,
  SectionDescription,
  Divider,
  LogoGrid,
  LogoCard,
  LogoImage,
  LogoLabel,
  LogoHeroWrapper,
  ColorGrid,
  ColorSwatch,
  ColorBlock,
  ColorMeta,
  ColorName,
  ColorHex,
  TypoRow,
  TypoLabel,
  TypoSample,
  TypoSpec,
  TypoColumns,
  TypoColumnHeader,
  ButtonGrid,
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  GhostButton,
  SmallButton,
  LargeButton,
  DisabledButton,
  ButtonRow,
  ButtonRowLabel,
  ComponentCard,
  ComponentLabel,
  ComponentGrid,
  ComponentShowcase,
  SpacingGrid,
  SpacingRow,
  SpacingBar,
  SpacingLabel,
  SubSection,
  SubSectionTitle,
  SampleTextBlock,
  LinkShowcase,
  LinkRow,
  LinkLabel,
  LinkSample,
  LinkDisabled,
  FormGrid,
  FormField,
  FormLabel,
  FormHint,
  TextInput,
  TextArea,
  StyledSelectTrigger,
  StyledSelectContent,
  StyledSelectViewport,
  StyledSelectItem,
  StyledSelectIcon,
  InputDisabled,
  InputError,
  FormError,
  AnimationGrid,
  AnimationCard,
  AnimationLabel,
  AnimationSpec,
  ShakeDemo,
  FadeInDemo,
  SlideUpDemo,
  PulseDemo,
  ScaleInDemo,
  TransitionRow,
  TransitionBox,
  TransitionLabel,
  TransitionItem,
  CopiedToast,
  BreakpointGrid,
  BreakpointRow,
  BreakpointBar,
  BreakpointValue,
  BreakpointName,
  BreakpointNote,
  ElevationGrid,
  ElevationCard,
  ElevationLevel,
  ElevationSpec,
} from "./design-system.styled";

const LOGO_VARIANTS = [
  { light: mingo, dark: mingoDark, label: "Mingo", size: "140px" },
  {
    light: mingoSimplified,
    dark: mingoSimplifiedDark,
    label: "Simplified",
    size: "140px",
  },
  {
    light: mingoMonochrome,
    dark: mingoMonochromeDark,
    label: "Monochrome",
    size: "140px",
  },
  { light: mingoSmall, dark: mingoSmallDark, label: "Small", size: "120px" },
  {
    light: mingoExtraSmall,
    dark: mingoExtraSmallDark,
    label: "Emblem",
    size: "64px",
  },
];

const LIGHT_COLORS = [
  { name: "Main", hex: COLORS.main },
  { name: "Primary", hex: COLORS.primary },
  { name: "Primary Alt", hex: COLORS.primaryAlt },
  { name: "Alt", hex: COLORS.alt },
  { name: "Alt 2", hex: COLORS.alt2 },
  { name: "Accent", hex: COLORS.accent },
  { name: "Accent 2", hex: COLORS.accent2 },
  { name: "Accent 3", hex: COLORS.accent3 },
  { name: "Accent 4", hex: COLORS.accent4 },
  { name: "Accent 5", hex: COLORS.accent5 },
];

const DARK_COLORS = [
  { name: "Main", hex: COLORS_DARK_MODE.main },
  { name: "Primary", hex: COLORS_DARK_MODE.primary },
  { name: "Primary Alt", hex: COLORS_DARK_MODE.primaryAlt },
  { name: "Alt", hex: COLORS_DARK_MODE.alt },
  { name: "Alt 2", hex: COLORS_DARK_MODE.alt2 },
  { name: "Accent", hex: COLORS_DARK_MODE.accent },
  { name: "Accent 2", hex: COLORS_DARK_MODE.accent2 },
  { name: "Accent 3", hex: COLORS_DARK_MODE.accent3 },
  { name: "Accent 4", hex: COLORS_DARK_MODE.accent4 },
  { name: "Accent 5", hex: COLORS_DARK_MODE.accent5 },
];

const SPACING = [
  { label: "4px", value: 4 },
  { label: "8px", value: 8 },
  { label: "12px", value: 12 },
  { label: "16px", value: 16 },
  { label: "24px", value: 24 },
  { label: "32px", value: 32 },
  { label: "48px", value: 48 },
  { label: "64px", value: 64 },
  { label: "96px", value: 96 },
];

const CustomSelect = ({
  options,
  placeholder,
}: {
  options: string[];
  placeholder: string;
}) => (
  <RadixSelect.Root>
    <RadixSelect.Trigger asChild>
      <StyledSelectTrigger>
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <StyledSelectIcon />
        </RadixSelect.Icon>
      </StyledSelectTrigger>
    </RadixSelect.Trigger>
    <RadixSelect.Portal>
      <RadixSelect.Content asChild position="popper" sideOffset={4}>
        <StyledSelectContent>
          <RadixSelect.Viewport asChild>
            <StyledSelectViewport>
              {options.map((opt) => (
                <RadixSelect.Item key={opt} value={opt} asChild>
                  <StyledSelectItem>
                    <RadixSelect.ItemText>{opt}</RadixSelect.ItemText>
                  </StyledSelectItem>
                </RadixSelect.Item>
              ))}
            </StyledSelectViewport>
          </RadixSelect.Viewport>
        </StyledSelectContent>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  </RadixSelect.Root>
);

const useScrollReveal = () => {
  const ref = useRef<HTMLElement[]>([]);

  const addRef = useCallback((el: HTMLElement | null) => {
    if (el && !ref.current.includes(el)) ref.current.push(el);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      ref.current.forEach((el) => el.setAttribute("data-visible", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    ref.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return addRef;
};

export const DesignSystem = () => {
  const { toggleThemeCallback, theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const reveal = useScrollReveal();

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 800);
  };

  return (
    <PageWrapper>
      <PageHeader>
        <div>
          <BackLink href={import.meta.env.DEV ? "/" : "/portfolio/"}>
            Back to Portfolio
          </BackLink>
          <Header3 style={{ margin: "8px 0 0" }}>Mingo Design System</Header3>
        </div>
        <Toggle checked={isDark} onToggleCallback={toggleThemeCallback} />
      </PageHeader>

      {/* Logos */}
      <Section ref={reveal}>
        <SectionTitle>Logo</SectionTitle>
        <SectionDescription>
          The Mingo flamingo mark comes in five variants for different contexts.
          Each variant has a light and dark mode version that adapts
          automatically with the theme.
        </SectionDescription>
        <Divider />

        <LogoHeroWrapper>
          <LogoImage
            src={isDark ? mingoDark : mingo}
            alt="Mingo logo"
            $size="180px"
          />
        </LogoHeroWrapper>

        <LogoGrid>
          {LOGO_VARIANTS.map(({ light, dark, label, size }) => (
            <LogoCard key={label}>
              <LogoImage
                src={isDark ? dark : light}
                alt={`Mingo ${label}`}
                $size={size}
              />
              <LogoLabel>{label}</LogoLabel>
            </LogoCard>
          ))}
        </LogoGrid>
      </Section>

      {/* Colors */}
      <Section ref={reveal}>
        <SectionTitle>Colors</SectionTitle>
        <SectionDescription>
          {isDark ? "Dark" : "Light"} mode palette. Toggle the theme to see both
          sets of tokens. The accent scale provides a range of intensities for
          interactive and decorative elements.
        </SectionDescription>
        <Divider />

        <ColorGrid>
          {colors.map(({ name, hex }) => (
            <ColorSwatch
              key={name}
              $color={hex}
              onClick={() => handleCopyColor(hex)}
            >
              <ColorBlock $color={hex} />
              {copiedHex === hex && <CopiedToast>Copied!</CopiedToast>}
              <ColorMeta>
                <ColorName>{name}</ColorName>
                <ColorHex>{hex.toUpperCase()}</ColorHex>
              </ColorMeta>
            </ColorSwatch>
          ))}
        </ColorGrid>
      </Section>

      {/* Typography */}
      <Section ref={reveal}>
        <SectionTitle>Typography</SectionTitle>
        <SectionDescription>
          Three font families: Playfair Display for display and headings, Inter
          for body and UI, and Noto Sans Mono for code. Sizes are responsive,
          scaling between mobile and desktop breakpoints.
        </SectionDescription>
        <Divider />

        <TypoColumns>
          <div>
            <TypoColumnHeader>Desktop (768px+)</TypoColumnHeader>

            <TypoRow>
              <TypoLabel>H0</TypoLabel>
              <TypoSample>
                <Header0 style={{ fontSize: "64px", lineHeight: "1.1" }}>
                  Display
                </Header0>
                <TypoSpec>Playfair Display / Black / 130px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H1</TypoLabel>
              <TypoSample>
                <Header1 style={{ fontSize: "48px", lineHeight: "1.2" }}>
                  Header 1
                </Header1>
                <TypoSpec>Inter / Bold / 72px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H2</TypoLabel>
              <TypoSample>
                <Header2 style={{ fontSize: "40px", lineHeight: "1.2" }}>
                  Header 2
                </Header2>
                <TypoSpec>Playfair Display / Regular / 58px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H3</TypoLabel>
              <TypoSample>
                <Header3 style={{ fontSize: "32px", lineHeight: "1.3" }}>
                  Header 3
                </Header3>
                <TypoSpec>Playfair Display / Regular / 44px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H4</TypoLabel>
              <TypoSample>
                <Header4 style={{ fontSize: "28px", lineHeight: "1.3" }}>
                  Header 4
                </Header4>
                <TypoSpec>Playfair Display / Regular / 36px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H5</TypoLabel>
              <TypoSample>
                <Header5 style={{ fontSize: "24px", lineHeight: "1.3" }}>
                  Header 5
                </Header5>
                <TypoSpec>Playfair Display / Regular / 30px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H6</TypoLabel>
              <TypoSample>
                <Header6>Header 6</Header6>
                <TypoSpec>Playfair Display / Italic / 18px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>P</TypoLabel>
              <TypoSample>
                <Paragraph
                  style={{ textIndent: 0, textAlign: "left", fontSize: "18px" }}
                >
                  Paragraph
                </Paragraph>
                <TypoSpec>Inter / Regular / 22px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>Code</TypoLabel>
              <TypoSample>
                <Code style={{ fontSize: "18px" }}>Code</Code>
                <TypoSpec>Noto Sans Mono / Regular / 22px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>Btn</TypoLabel>
              <TypoSample>
                <Button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "default",
                    padding: 0,
                    fontSize: "18px",
                    textAlign: "left",
                  }}
                >
                  Button
                </Button>
                <TypoSpec>Inter / Medium / 24px</TypoSpec>
              </TypoSample>
            </TypoRow>
          </div>

          <div>
            <TypoColumnHeader>Mobile (&lt;768px)</TypoColumnHeader>

            <TypoRow>
              <TypoLabel>H0</TypoLabel>
              <TypoSample>
                <Header0 style={{ fontSize: "40px", lineHeight: "1.1" }}>
                  Display
                </Header0>
                <TypoSpec>Playfair Display / Black / 64px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H1</TypoLabel>
              <TypoSample>
                <Header1 style={{ fontSize: "30px", lineHeight: "1.2" }}>
                  Header 1
                </Header1>
                <TypoSpec>Inter / Bold / 38px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H2</TypoLabel>
              <TypoSample>
                <Header2 style={{ fontSize: "26px", lineHeight: "1.2" }}>
                  Header 2
                </Header2>
                <TypoSpec>Playfair Display / Regular / 34px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H3</TypoLabel>
              <TypoSample>
                <Header3 style={{ fontSize: "24px", lineHeight: "1.3" }}>
                  Header 3
                </Header3>
                <TypoSpec>Playfair Display / Regular / 30px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H4</TypoLabel>
              <TypoSample>
                <Header4 style={{ fontSize: "20px", lineHeight: "1.3" }}>
                  Header 4
                </Header4>
                <TypoSpec>Playfair Display / Regular / 24px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H5</TypoLabel>
              <TypoSample>
                <Header5 style={{ fontSize: "18px", lineHeight: "1.3" }}>
                  Header 5
                </Header5>
                <TypoSpec>Playfair Display / Regular / 22px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>H6</TypoLabel>
              <TypoSample>
                <Header6 style={{ fontSize: "10px" }}>Header 6</Header6>
                <TypoSpec>Playfair Display / Light / 10px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>P</TypoLabel>
              <TypoSample>
                <Paragraph
                  style={{ textIndent: 0, textAlign: "left", fontSize: "16px" }}
                >
                  Paragraph
                </Paragraph>
                <TypoSpec>Inter / Regular / 16px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>Code</TypoLabel>
              <TypoSample>
                <Code style={{ fontSize: "16px" }}>Code</Code>
                <TypoSpec>Noto Sans Mono / Regular / 16px</TypoSpec>
              </TypoSample>
            </TypoRow>

            <TypoRow>
              <TypoLabel>Btn</TypoLabel>
              <TypoSample>
                <Button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "default",
                    padding: 0,
                    fontSize: "16px",
                    textAlign: "left",
                  }}
                >
                  Button
                </Button>
                <TypoSpec>Inter / Medium / 20px</TypoSpec>
              </TypoSample>
            </TypoRow>
          </div>
        </TypoColumns>

        <SubSection>
          <SubSectionTitle>Sample Text</SubSectionTitle>
          <SampleTextBlock>
            <Header1 color="primary-alt">
              Hey, I'm Afonso.
            </Header1>
            <Header2>
              I am a Dev @ Ambush. I can help you design your product, develop
              your brand, or systematize your design flow.
            </Header2>
            <Paragraph>
              With a focus on data-driven problem solving, I utilize relevant
              design systems customized to project needs and execute complex
              tasks effectively and logically. More importantly, my mission is to
              engage and contribute to a world of beautifully designed
              experiences that make lives better, minds clearer, the planet
              healthier, and dreams into tangible realities.
            </Paragraph>
          </SampleTextBlock>
        </SubSection>
      </Section>

      {/* Buttons */}
      <Section ref={reveal}>
        <SectionTitle>Buttons</SectionTitle>
        <SectionDescription>
          Button variants for different levels of emphasis. Primary for main
          actions, secondary for supporting actions, outline for lower emphasis,
          and ghost for the most subtle interactions.
        </SectionDescription>
        <Divider />

        <ButtonRow>
          <ButtonRowLabel>Variants</ButtonRowLabel>
          <ButtonGrid>
            <PrimaryButton>Primary</PrimaryButton>
            <SecondaryButton>Secondary</SecondaryButton>
            <OutlineButton>Outline</OutlineButton>
            <GhostButton>Ghost</GhostButton>
            <DisabledButton disabled>Disabled</DisabledButton>
          </ButtonGrid>

          <ButtonRowLabel>Sizes</ButtonRowLabel>
          <ButtonGrid>
            <SmallButton>Small</SmallButton>
            <PrimaryButton>Default</PrimaryButton>
            <LargeButton>Large</LargeButton>
          </ButtonGrid>
        </ButtonRow>
      </Section>

      {/* Form Inputs */}
      <Section ref={reveal}>
        <SectionTitle>Form Inputs</SectionTitle>
        <SectionDescription>
          Input fields, textareas, and selects. All share the same border,
          focus, and hover treatment using accent tokens.
        </SectionDescription>
        <Divider />

        <FormGrid>
          <FormField>
            <FormLabel>Text Input</FormLabel>
            <TextInput type="text" placeholder="Enter your name" />
            <FormHint>Standard single-line input</FormHint>
          </FormField>

          <FormField>
            <FormLabel>Email Input</FormLabel>
            <TextInput type="email" placeholder="you@example.com" />
          </FormField>

          <FormField>
            <FormLabel>Select</FormLabel>
            <CustomSelect
              options={["React", "TypeScript", "Styled Components"]}
              placeholder="Choose an option"
            />
          </FormField>

          <FormField>
            <FormLabel>Disabled</FormLabel>
            <InputDisabled
              type="text"
              placeholder="Cannot edit"
              disabled
            />
          </FormField>

          <FormField>
            <FormLabel>Error State</FormLabel>
            <InputError type="text" defaultValue="Invalid input" />
            <FormError>This field is required</FormError>
          </FormField>

          <FormField>
            <FormLabel>Textarea</FormLabel>
            <TextArea placeholder="Write something longer here..." />
          </FormField>
        </FormGrid>
      </Section>

      {/* Links */}
      <Section ref={reveal}>
        <SectionTitle>Links</SectionTitle>
        <SectionDescription>
          Anchor styles use the alt color by default and shift to accent5 on
          hover. All links are underlined for accessibility.
        </SectionDescription>
        <Divider />

        <LinkShowcase>
          <LinkRow>
            <LinkLabel>Default</LinkLabel>
            <LinkSample href="#">View portfolio</LinkSample>
          </LinkRow>
          <LinkRow>
            <LinkLabel>Inline</LinkLabel>
            <Paragraph
              style={{ textIndent: 0, textAlign: "left", margin: 0 }}
            >
              Check out my work on{" "}
              <a href="#">GitHub</a> or connect with me on{" "}
              <a href="#">LinkedIn</a>.
            </Paragraph>
          </LinkRow>
          <LinkRow>
            <LinkLabel>Disabled</LinkLabel>
            <LinkDisabled>Unavailable link</LinkDisabled>
          </LinkRow>
        </LinkShowcase>
      </Section>

      {/* Components */}
      <Section ref={reveal}>
        <SectionTitle>Components</SectionTitle>
        <SectionDescription>
          Reusable UI components that follow the design tokens above.
        </SectionDescription>
        <Divider />

        <ComponentGrid>
          <ComponentCard>
            <ComponentLabel>Badge</ComponentLabel>
            <ComponentShowcase>
              <Badge label="React" />
              <Badge label="TypeScript" />
              <Badge label="Styled Components" />
              <Badge label="Vite" />
              <Badge label="React Native" />
            </ComponentShowcase>
          </ComponentCard>

          <ComponentCard>
            <ComponentLabel>Badge (Interactive)</ComponentLabel>
            <ComponentShowcase>
              <Badge label="Frontend" onClickCallback={() => {}} />
              <Badge label="Backend" onClickCallback={() => {}} />
              <Badge label="Mobile" onClickCallback={() => {}} />
              <Badge label="DevOps" onClickCallback={() => {}} />
            </ComponentShowcase>
          </ComponentCard>

          <ComponentCard>
            <ComponentLabel>Toggle</ComponentLabel>
            <ComponentShowcase>
              <Toggle checked={false} onToggleCallback={() => {}} />
              <Toggle checked={true} onToggleCallback={() => {}} />
            </ComponentShowcase>
          </ComponentCard>

          <ComponentCard>
            <ComponentLabel>Theme Toggle (Live)</ComponentLabel>
            <ComponentShowcase>
              <ComponentLabel>
                {isDark ? "Dark" : "Light"}
              </ComponentLabel>
              <Toggle
                checked={isDark}
                onToggleCallback={toggleThemeCallback}
              />
            </ComponentShowcase>
          </ComponentCard>
        </ComponentGrid>
      </Section>

      {/* Animations */}
      <Section ref={reveal}>
        <SectionTitle>Animations</SectionTitle>
        <SectionDescription>
          Keyframe animations for entrances, attention, and feedback. All loop
          here for preview. In production, most would run once on mount.
        </SectionDescription>
        <Divider />

        <AnimationGrid>
          <AnimationCard>
            <ShakeDemo>👋</ShakeDemo>
            <AnimationLabel>Shake</AnimationLabel>
            <AnimationSpec>3s / ease-in-out / infinite</AnimationSpec>
          </AnimationCard>

          <AnimationCard>
            <FadeInDemo>A</FadeInDemo>
            <AnimationLabel>Fade In</AnimationLabel>
            <AnimationSpec>2s / ease</AnimationSpec>
          </AnimationCard>

          <AnimationCard>
            <SlideUpDemo>B</SlideUpDemo>
            <AnimationLabel>Slide Up</AnimationLabel>
            <AnimationSpec>2s / ease / translateY(16px)</AnimationSpec>
          </AnimationCard>

          <AnimationCard>
            <PulseDemo>C</PulseDemo>
            <AnimationLabel>Pulse</AnimationLabel>
            <AnimationSpec>2s / ease-in-out / infinite</AnimationSpec>
          </AnimationCard>

          <AnimationCard>
            <ScaleInDemo>D</ScaleInDemo>
            <AnimationLabel>Scale In</AnimationLabel>
            <AnimationSpec>2s / ease / scale(0.9)</AnimationSpec>
          </AnimationCard>
        </AnimationGrid>

        <SubSection>
          <SubSectionTitle>Transition Durations</SubSectionTitle>
          <SectionDescription>
            Hover each box to preview the transition speed. The global default
            is 0.3s.
          </SectionDescription>
          <TransitionRow>
            <TransitionItem>
              <TransitionBox $duration="0.1s" />
              <TransitionLabel>0.1s</TransitionLabel>
            </TransitionItem>
            <TransitionItem>
              <TransitionBox $duration="0.2s" />
              <TransitionLabel>0.2s</TransitionLabel>
            </TransitionItem>
            <TransitionItem>
              <TransitionBox $duration="0.3s" />
              <TransitionLabel>0.3s</TransitionLabel>
            </TransitionItem>
            <TransitionItem>
              <TransitionBox $duration="0.5s" />
              <TransitionLabel>0.5s</TransitionLabel>
            </TransitionItem>
            <TransitionItem>
              <TransitionBox $duration="1s" />
              <TransitionLabel>1s</TransitionLabel>
            </TransitionItem>
          </TransitionRow>
        </SubSection>
      </Section>

      {/* Experience Card */}
      <Section ref={reveal}>
        <SectionTitle>Experience Card</SectionTitle>
        <SectionDescription>
          An expandable card used on the home page to showcase work history.
          Click to toggle between a short summary and the full description.
        </SectionDescription>
        <Divider />

        <Experience
          title="Engineering Manager at Ravn"
          months={4}
          industries={["consultancy", "AI", "mobile"]}
          tags={["engineering management", "React Native", "Expo", "NestJS"]}
          shortText="First Engineering Manager at Ravn, defining the role from scratch while leading multiple concurrent client engagements."
          text="Serving as the first Engineering Manager at Ravn, a software consultancy, building the role and its frameworks from scratch. Leading a cross-functional team across multiple concurrent client engagements simultaneously, each with distinct tech stacks and stakeholder dynamics."
        />
      </Section>

      {/* Shadows / Elevation */}
      <Section ref={reveal}>
        <SectionTitle>Shadows</SectionTitle>
        <SectionDescription>
          Four elevation levels for layering UI elements. Shadow color is
          derived from primaryAlt in light mode and black in dark mode.
        </SectionDescription>
        <Divider />

        <ElevationGrid>
          <ElevationCard $level={0}>
            <ElevationLevel>Level 0</ElevationLevel>
            <ElevationSpec>No shadow</ElevationSpec>
          </ElevationCard>
          <ElevationCard $level={1}>
            <ElevationLevel>Level 1</ElevationLevel>
            <ElevationSpec>Cards, inputs</ElevationSpec>
          </ElevationCard>
          <ElevationCard $level={2}>
            <ElevationLevel>Level 2</ElevationLevel>
            <ElevationSpec>Dropdowns, popovers</ElevationSpec>
          </ElevationCard>
          <ElevationCard $level={3}>
            <ElevationLevel>Level 3</ElevationLevel>
            <ElevationSpec>Modals, dialogs</ElevationSpec>
          </ElevationCard>
        </ElevationGrid>
      </Section>

      {/* Breakpoints */}
      <Section ref={reveal}>
        <SectionTitle>Breakpoints</SectionTitle>
        <SectionDescription>
          Mobile-first breakpoints. Base styles target the smallest screens,
          then scale up at each threshold.
        </SectionDescription>
        <Divider />

        <BreakpointGrid>
          {[
            { name: "mobile", value: 480 },
            { name: "tablet", value: 768 },
            { name: "desktop", value: 1024 },
            { name: "wide", value: 1440 },
          ].map(({ name, value }) => (
            <BreakpointRow key={name}>
              <BreakpointName>{name}</BreakpointName>
              <BreakpointBar $width={value} $maxWidth={1440} />
              <BreakpointValue>{value}px</BreakpointValue>
            </BreakpointRow>
          ))}
        </BreakpointGrid>
        <BreakpointNote>
          Usage: media.tablet, media.desktop, media.wide
        </BreakpointNote>
      </Section>

      {/* Spacing */}
      <Section ref={reveal}>
        <SectionTitle>Spacing</SectionTitle>
        <SectionDescription>
          A consistent spacing scale used for margins, padding, and gaps
          throughout the interface.
        </SectionDescription>
        <Divider />

        <SpacingGrid>
          {SPACING.map(({ label, value }) => (
            <SpacingRow key={label}>
              <SpacingLabel>{label.padStart(4, " ")}</SpacingLabel>
              <SpacingBar $width={value * 3} />
            </SpacingRow>
          ))}
        </SpacingGrid>
      </Section>
    </PageWrapper>
  );
};
