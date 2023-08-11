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
} from "ui/typography";

export const Typography = () => (
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
);
