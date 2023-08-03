import { FC } from "react";
import { LabelWrapper, ToggleInput } from "./toggle.styled";
import { ToggleProps } from "./types";

export const Toggle: FC<ToggleProps> = ({ checked, onToggleCallback }) => {
  return (
    <LabelWrapper checked={checked}>
      <ToggleInput
        type="checkbox"
        defaultChecked={checked}
        onClick={onToggleCallback}
      />
    </LabelWrapper>
  );
};
