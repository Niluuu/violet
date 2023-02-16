import { useState } from "react";
import { Icon } from "./Icon";


type CheckboxProps = {
  onClick?: () => void;
  isChecked?: boolean;
};

export const Checkbox = ({ onClick, isChecked }: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const handleClick = () => {
    setChecked((prevState) => !prevState);
    onClick;
  };

  return (
    <div className="checkbox">
      <input type="checkbox" checked />
      <label onClick={handleClick}>
        {!checked ? (
          <Icon path="/images/empty-checked.svg" size="sm" />
        ) : (
          <Icon path="/images/checked.svg" size="md" />
        )}
      </label>
    </div>
  );
};
