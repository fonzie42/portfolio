import { FC, useState } from "react";
import { ExperienceProps } from "./types";
import { Header3, Header6, Paragraph } from "ui/typography";
import { Badge } from "ui/Badge";
import {
  ExperienceCard,
  ExperienceHeaderRow,
  ExperienceHeader,
  ExperienceMeta,
  ExperienceTags,
  MoreTagsBadge,
  Chevron,
  ExperienceBody,
  ExperienceBodyInner,
  ExperienceContent,
} from "./experience.styled";

const DEFAULT_COLLAPSED_TAG_COUNT = 3;

export const Experience: FC<ExperienceProps> = ({
  title,
  industries,
  months,
  tags,
  collapsedTagCount,
  text,
  shortText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const tagLimit = collapsedTagCount ?? DEFAULT_COLLAPSED_TAG_COUNT;

  const handleHeaderClick = () => {
    if (!isExpanded) setIsExpanded(true);
  };

  const visibleTags = isExpanded ? tags : tags.slice(0, tagLimit);
  const hiddenCount = tags.length - tagLimit;

  return (
    <ExperienceCard $expanded={isExpanded}>
      <ExperienceHeaderRow
        onClick={handleHeaderClick}
        style={{ cursor: isExpanded ? "default" : "pointer" }}
      >
        <ExperienceHeader>
          <Header3 style={{ margin: 0 }}>{title}</Header3>
          <ExperienceMeta>
            <Header6 style={{ margin: 0 }}>
              {industries.join(", ")} / {months} Months
            </Header6>
          </ExperienceMeta>
          <ExperienceTags>
            {visibleTags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
            {!isExpanded && hiddenCount > 0 && (
              <MoreTagsBadge>+{hiddenCount}</MoreTagsBadge>
            )}
          </ExperienceTags>
          <Paragraph style={{ margin: "12px 0 0" }}>{shortText}</Paragraph>
        </ExperienceHeader>
        <Chevron
          $expanded={isExpanded}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse" : "Expand"}
        />
      </ExperienceHeaderRow>

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
