import { FC, useState, useRef, useEffect } from "react";
import { ExperienceProps } from "./types";
import { Header4, Header6 } from "ui/typography";
import { Badge } from "ui/Badge";
import {
  CardRevealWrapper,
  ExperienceCard,
  ExperienceHeaderRow,
  ExperienceHeader,
  MetaRow,
  Period,
  Duration,
  ExperienceTags,
  TagItem,
  MoreTagsBadge,
  Chevron,
  ExperienceBody,
  ExperienceBodyInner,
  ExperienceContent,
  CardParagraph,
  ShortText,
} from "./experience.styled";

const DEFAULT_COLLAPSED_TAG_COUNT = 3;

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const toDate = (s: string) => {
  const [y, m] = s.split("-").map(Number);
  return new Date(y, m - 1);
};

const label = (d: Date) => `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

const formatPeriod = (start: string, end: string | null) =>
  end ? `${label(toDate(start))} - ${label(toDate(end))}` : `${label(toDate(start))} - Present`;

const formatDuration = (start: string, end: string | null) => {
  const s = toDate(start);
  const e = end ? toDate(end) : new Date();
  const total = (e.getFullYear() - s.getFullYear()) * 12 + e.getMonth() - s.getMonth();
  const yrs = Math.floor(total / 12);
  const mos = total % 12;
  if (yrs === 0) return plural(total, "Month");
  if (mos === 0) return plural(yrs, "Year");
  return `${plural(yrs, "Year")} ${plural(mos, "Month")}`;
};

export const Experience: FC<ExperienceProps> = ({
  title,
  startDate,
  endDate,
  industries,
  tags,
  collapsedTagCount,
  paragraphs,
  shortText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const tagLimit = collapsedTagCount ?? DEFAULT_COLLAPSED_TAG_COUNT;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = () => setIsExpanded((prev) => !prev);

  const visibleTags = isExpanded ? tags : tags.slice(0, tagLimit);
  const hiddenCount = tags.length - tagLimit;

  return (
    <CardRevealWrapper ref={cardRef} $visible={isVisible}>
      <ExperienceCard $expanded={isExpanded}>
        <ExperienceHeaderRow
          onClick={isExpanded ? undefined : toggle}
          style={{ cursor: isExpanded ? "default" : "pointer" }}
        >
          <ExperienceHeader>
            <Header4 style={{ margin: 0 }}>{title}</Header4>
            <Header6 style={{ margin: "4px 0 0" }}>
              {industries.join(" · ")}
            </Header6>
            <MetaRow>
              <Period>{formatPeriod(startDate, endDate)}</Period>
              <Duration>{formatDuration(startDate, endDate)}</Duration>
            </MetaRow>
            <ExperienceTags>
              {visibleTags.map((tag, i) => (
                <TagItem
                  key={tag}
                  $isNew={isExpanded && i >= tagLimit}
                  $delay={Math.max(0, i - tagLimit) * 40}
                >
                  <Badge label={tag} />
                </TagItem>
              ))}
              {!isExpanded && hiddenCount > 0 && (
                <MoreTagsBadge>+{hiddenCount}</MoreTagsBadge>
              )}
            </ExperienceTags>
            <ShortText>{shortText}</ShortText>
          </ExperienceHeader>
          <Chevron
            $expanded={isExpanded}
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 5L7 9L11 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Chevron>
        </ExperienceHeaderRow>

        <ExperienceBody $expanded={isExpanded}>
          <ExperienceBodyInner>
            <ExperienceContent $expanded={isExpanded}>
              {paragraphs.map((p, i) => (
                <CardParagraph key={i}>{p}</CardParagraph>
              ))}
            </ExperienceContent>
          </ExperienceBodyInner>
        </ExperienceBody>
      </ExperienceCard>
    </CardRevealWrapper>
  );
};
