import { FC, useState } from "react";
import { ExperienceProps } from "./types";
import { Header3, Header6, Paragraph } from "ui/typography";
import { Badge } from "ui/Badge";
import {
  ExperienceCard,
  ExperienceToggle,
  ExperienceHeader,
  ExperienceMeta,
  ExperienceTags,
  Chevron,
  ExperienceBody,
  ExperienceBodyInner,
  ExperienceContent,
} from "./experience.styled";

export const Experience: FC<ExperienceProps> = ({
  title,
  industries,
  months,
  tags,
  text,
  shortText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <ExperienceCard $expanded={isExpanded}>
      <ExperienceToggle
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <ExperienceHeader>
          <Header3 style={{ margin: 0 }}>{title}</Header3>
          <ExperienceMeta>
            <Header6 style={{ margin: 0 }}>
              {industries.join(", ")} / {months} Months
            </Header6>
          </ExperienceMeta>
          <ExperienceTags>
            {tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </ExperienceTags>
          <Paragraph style={{ margin: "12px 0 0" }}>{shortText}</Paragraph>
        </ExperienceHeader>
        <Chevron $expanded={isExpanded} />
      </ExperienceToggle>

      <ExperienceBody $expanded={isExpanded}>
        <ExperienceBodyInner>
          <ExperienceContent>
            <Paragraph style={{ margin: 0 }}>{text}</Paragraph>
          </ExperienceContent>
        </ExperienceBodyInner>
      </ExperienceBody>
    </ExperienceCard>
  );
};
