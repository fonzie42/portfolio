import styled, { css, keyframes } from "styled-components";
import { media } from "theme/media";
import {
  pressEffect,
  floatOnHover,
  copyFlash,
  scrollReveal,
} from "ui/micro-interactions";

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px 80px;
  text-align: left;
  overflow-x: hidden;

  ${media.tabletBig`
    padding: 48px 48px 120px;
  `}
`;

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.accent5};

  ${media.tablet`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const BackLink = styled.a`
  font-family: Inter;
  font-size: 14px;
  text-decoration: none;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.primaryAlt};
  }
`;

export const Section = styled.section`
  margin-bottom: 64px;
  ${scrollReveal}

  ${media.tabletBig`
    margin-bottom: 96px;
  `}
`;

export const SectionTitle = styled.h2`
  font-family: Playfair Display;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 8px;
  word-break: break-word;

  ${media.tabletBig`
    font-size: 44px;
  `}
`;

export const SectionDescription = styled.p`
  font-family: Inter;
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.7;
  margin-bottom: 24px;

  ${media.tabletBig`
    font-size: 18px;
    margin-bottom: 48px;
  `}
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.accent5};
  margin: 0 0 32px;
  opacity: 0.4;
`;

export const LogoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 24px;

  ${media.tabletBig`
    gap: 48px;
  `}
`;

export const LogoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const LogoImage = styled.img<{ $size?: string }>`
  height: ${({ $size }) => $size || "120px"};
  transition: 0.3s;
  ${floatOnHover}

  &:hover {
    filter: drop-shadow(0 0 12px ${({ theme }) => theme.accent5});
  }
`;

export const LogoLabel = styled.span`
  font-family: Inter;
  font-size: 13px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;
`;

export const LogoHeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.main};
  border: 1px solid ${({ theme }) => theme.accent5};
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;

  ${media.tabletBig`
    padding: 80px;
    margin-bottom: 48px;
  `}
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  `}

  ${media.tabletBig`
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  `}
`;

export const ColorSwatch = styled.div<{ $color: string }>`
  cursor: pointer;
  position: relative;

  &:hover > div:first-child {
    transform: scale(1.03);
  }
`;

export const CopiedToast = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.main};
  padding: 4px 8px;
  border-radius: 4px;
  animation: ${copyFlash} 0.8s ease forwards;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`;


export const ColorBlock = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  border-radius: 12px;
  height: 80px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.accent5};

  ${media.tabletBig`
    height: 100px;
  `}
`;

export const ColorMeta = styled.div`
  padding: 8px 4px 0;
`;

export const ColorName = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
`;

export const ColorHex = styled.div`
  font-family: Noto Sans Mono;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;
  margin-top: 2px;
`;

export const TypoRow = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr;
  column-gap: 12px;
  align-items: baseline;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.accent5}20;

  ${media.tabletBig`
    grid-template-columns: 80px 1fr;
    column-gap: 32px;
    padding: 24px 0;
  `}
`;

export const TypoLabel = styled.span`
  font-family: Noto Sans Mono;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
  text-transform: uppercase;

  ${media.tabletBig`
    font-size: 14px;
  `}
`;

export const TypoSample = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
  word-break: break-word;

  & > *:first-child {
    margin: 0;
    padding: 0;
  }
`;

export const TypoSpec = styled.span`
  font-family: Inter;
  font-size: 12px;
  font-style: italic;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
`;

export const TypoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ${media.tabletBig`
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  `}
`;

export const TypoColumnHeader = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.accent5};
  margin-bottom: 8px;
`;

export const ButtonGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  ${media.tablet`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
  `}
`;

const ButtonBase = css`
  font-family: Inter;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  ${pressEffect}

  &:hover {
    border-color: unset;
  }
  &:focus,
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent3};
    outline-offset: 2px;
  }
`;

export const PrimaryButton = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 12px 24px;
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const SecondaryButton = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.accent};
  padding: 12px 24px;
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.primaryAlt};
    border-color: ${({ theme }) => theme.primaryAlt};
  }
`;

export const OutlineButton = styled.button`
  ${ButtonBase}
  background: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.main};
  padding: 12px 24px;
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.main};
  }
`;

export const GhostButton = styled.button`
  ${ButtonBase}
  background: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid transparent;
  padding: 12px 24px;
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.accent5}30;
  }
`;

export const SmallButton = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 8px 16px;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const LargeButton = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 16px 32px;
  font-size: 18px;

  &:hover {
    background: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const DisabledButton = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => theme.accent5};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.accent5};
  padding: 12px 24px;
  font-size: 16px;
  cursor: not-allowed;
  opacity: 0.5;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonRowLabel = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 16px;
`;

export const ComponentShowcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.accent5}40;
`;

export const ComponentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.accent5}40;
`;

export const ComponentLabel = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${media.tabletBig`
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  `}
`;

export const SpacingGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SpacingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SpacingBar = styled.div<{ $width: number }>`
  height: 24px;
  width: ${({ $width }) => $width}px;
  background: ${({ theme }) => theme.accent5};
  border-radius: 4px;
  min-width: 4px;
`;

export const SpacingLabel = styled.span`
  font-family: Noto Sans Mono;
  font-size: 13px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;
  white-space: nowrap;
`;

export const SubSection = styled.div`
  margin-top: 40px;
`;

export const SubSectionTitle = styled.h3`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;

  ${media.tabletBig`
    font-size: 20px;
  `}
`;

export const LinkShowcase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LinkRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;

  ${media.tabletBig`
    gap: 24px;
  `}
`;

export const LinkLabel = styled.span`
  font-family: Noto Sans Mono;
  font-size: 11px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
  text-transform: uppercase;
  min-width: 56px;

  ${media.tabletBig`
    font-size: 14px;
    min-width: 80px;
  `}
`;

export const LinkSample = styled.a`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;

  ${media.tabletBig`
    font-size: 20px;
  `}
`;

export const LinkDisabled = styled.span`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.4;
  text-decoration: underline;
  cursor: not-allowed;

  ${media.tabletBig`
    font-size: 20px;
  `}
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  ${media.tabletBig`
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  `}
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormLabel = styled.label`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

export const FormHint = styled.span`
  font-family: Inter;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
`;

const inputBase = css`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primaryAlt};
  background: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.accent5};
  border-radius: 8px;
  padding: 12px 16px;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
  max-width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.primaryAlt};
    opacity: 0.4;
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent3};
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.main} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.primaryAlt};
    border-color: ${({ theme }) => theme.accent5};
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const TextInput = styled.input`
  ${inputBase}
`;

export const TextArea = styled.textarea`
  ${inputBase}
  resize: vertical;
  min-height: 100px;
`;

export const StyledSelectTrigger = styled.button`
  ${inputBase}
  margin: 0;
  width: 100%;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  &[data-state="open"] {
    border-color: ${({ theme }) => theme.accent};
  }

  & > span[style] {
    color: ${({ theme }) => theme.primaryAlt};
    opacity: 0.4;
  }
`;

export const StyledSelectContent = styled.div`
  background: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.accent5};
  border-radius: 8px;
  padding: 4px 0;
  overflow: hidden;
  z-index: 10;
  width: var(--radix-select-trigger-width);

  &,
  & * {
    transition: none;
    animation: none;
  }
`;

export const StyledSelectViewport = styled.div`
  max-height: 200px;
`;

export const StyledSelectItem = styled.div`
  font-family: Inter;
  font-size: 16px;
  color: ${({ theme }) => theme.primaryAlt};
  padding: 10px 16px;
  cursor: pointer;
  outline: none;
  transition: background 0.15s;

  &[data-highlighted] {
    background: ${({ theme }) => theme.accent5};
    color: ${({ theme }) => theme.main};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
  }
`;

export const StyledSelectIcon = styled.span`
  display: inline-flex;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid ${({ theme }) => theme.primaryAlt};
`;

export const InputDisabled = styled.input`
  ${inputBase}
  opacity: 0.4;
  cursor: not-allowed;
`;

export const InputError = styled.input`
  ${inputBase}
  border-color: ${({ theme }) => theme.accent};
  box-shadow: 0 0 8px 2px ${({ theme }) =>
    theme.mode === "dark" ? theme.accent5 : theme.accent5};
`;

export const FormError = styled.span`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

export const AnimationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${media.tabletBig`
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  `}
`;

export const AnimationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.accent5}40;
`;

export const AnimationLabel = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

export const AnimationSpec = styled.div`
  font-family: Noto Sans Mono;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
`;

export const AnimationDemo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: ${({ theme }) => theme.accent5};
  color: ${({ theme }) => theme.main};
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
`;

export const ShakeDemo = styled(AnimationDemo)`
  animation: ${keyframes`
    35% { transform: rotate(0deg); }
    40% { transform: rotate(5deg); }
    50% { transform: rotate(-5deg); }
    60% { transform: rotate(5deg); }
    65% { transform: rotate(0deg); }
  `} 3s ease-in-out infinite;
  transform-origin: bottom right;
`;

export const FadeInDemo = styled(AnimationDemo)`
  animation: ${fadeIn} 2s ease infinite;
`;

export const SlideUpDemo = styled(AnimationDemo)`
  animation: ${slideUp} 2s ease infinite;
`;

export const PulseDemo = styled(AnimationDemo)`
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const ScaleInDemo = styled(AnimationDemo)`
  animation: ${scaleIn} 2s ease infinite;
`;

export const AnimationReplayButton = styled.button`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.accent5};
  border-radius: 6px;
  padding: 4px 12px;
  margin: 0;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    border-color: ${({ theme }) => theme.accent3};
  }
`;

export const TransitionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
`;

export const TransitionBox = styled.div<{ $duration: string }>`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: ${({ theme }) => theme.accent5};
  transition: transform ${({ $duration }) => $duration} ease,
    background ${({ $duration }) => $duration} ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
    background: ${({ theme }) => theme.accent};
  }
`;

export const TransitionLabel = styled.div`
  font-family: Noto Sans Mono;
  font-size: 13px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;
  text-align: center;
  margin-top: 8px;
`;

export const TransitionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BreakpointGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BreakpointRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const BreakpointBar = styled.div<{ $width: number; $maxWidth: number }>`
  height: 32px;
  width: ${({ $width, $maxWidth }) => ($width / $maxWidth) * 100}%;
  background: ${({ theme }) => theme.accent5};
  border-radius: 6px;
  min-width: 24px;
  position: relative;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.accent3};
  }
`;

export const BreakpointValue = styled.span`
  font-family: Noto Sans Mono;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
  white-space: nowrap;

  ${media.tabletBig`
    font-size: 14px;
  `}
`;

export const BreakpointName = styled.span`
  font-family: Inter;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;
  min-width: 48px;

  ${media.tabletBig`
    font-size: 14px;
    min-width: 64px;
  `}
`;

export const BreakpointNote = styled.div`
  font-family: Inter;
  font-size: 13px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
  margin-top: 8px;
`;

export const SampleTextBlock = styled.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.accent5}40;
  margin-top: 24px;
  overflow: hidden;
  word-break: break-word;

  ${media.tabletBig`
    padding: 48px;
  `}

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;
