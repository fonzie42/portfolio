import { FC, useState } from "react";
import { ExperienceProps } from "./types";
import { Header3, Header5, Header6, Paragraph } from "ui/typography";
import { Badge } from "ui/Badge";
import { ExperienceHeader, ExperienceButton } from "./experience.styled";

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
    <ExperienceButton onClick={() => setIsExpanded(!isExpanded)}>
      <ExperienceHeader>
        <Header3>{title}</Header3>
        <Header6>
          Industries: {industries.join(", ")} / {months} Months
        </Header6>
        <div>
          {tags.map((tag) => (
            <Badge label={tag}></Badge>
          ))}
        </div>
      </ExperienceHeader>
      <Paragraph>{isExpanded ? text : shortText}</Paragraph>
      <Header5>{isExpanded ? "See Less" : "See More"}</Header5>
    </ExperienceButton>
  );
};
