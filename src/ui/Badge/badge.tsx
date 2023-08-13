import { FC } from "react";
import { BadgeProps } from "./types";
import { BadgeWrapper } from "./badge.styled";

export const Badge: FC<BadgeProps> = ({ label }) => {
  return <BadgeWrapper>{label}</BadgeWrapper>;
};
