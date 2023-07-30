import styled, { css } from "styled-components";
import { ToggleProps } from "./types";

export const ToggleInput = styled.input`
  display: none;
`;

export const LabelWrapper = styled.label<Pick<ToggleProps, "checked">>`
  background: #dfdfdf;
  border-radius: 2em;
  padding: 2px;
  transition: all 0.4s ease;
  &:after {
    border-radius: 50%;
    background: #fff;
    transition: all 0.2s ease;

    left: 0;
  }

  &:after,
  &:before {
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
  }

  &:before {
    display: none;
  }

  outline: 0;
  display: block;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  user-select: none;

  ${({ checked }) =>
    checked &&
    css`
      &:after {
        left: 50%;
      }

      background: ${({ theme }) => theme.accent3};
    `}
`;
