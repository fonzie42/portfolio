import { FC } from "react";
import { BadgeProps } from "./types";
import { BadgeWrapper, BadgeButtonWrapper } from "./badge.styled";

export const Badge: FC<BadgeProps> = ({ label, onClickCallback }) => {
  if (onClickCallback) {
    return (
      <BadgeButtonWrapper onClick={onClickCallback}>{label}</BadgeButtonWrapper>
    );
  }
  return <BadgeWrapper>{label}</BadgeWrapper>;
};
