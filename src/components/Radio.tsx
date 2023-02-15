import { useState } from "react";

type RadioProps = {
  onClick?: () => void;
  isChecked?: boolean;
  value: string;
  name: string;
};

export const Radio = ({ onClick, isChecked, name, value }: RadioProps) => {
  const [checked, setChecked] = useState(isChecked);

  const handleClick = () => {
    setChecked((prevState) => !prevState);
    onClick;
  };

  return (
    <div className="radio">
      <input type="radio" name={name} value={value} checked={checked} />
      <label onClick={handleClick}></label>
    </div>
  );
};
