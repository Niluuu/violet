import { useState } from "react";

type SwitchProps = {
  onClick?: () => void;
  isChecked?: boolean
};

export const Switch = ({ onClick, isChecked }: SwitchProps) => {
  const [checked, setChecked] = useState(isChecked);

  const handleClick = () => {
    setChecked((prevState) => !prevState);
    onClick
  }

  return (
    <div className="switch">
      <input type="checkbox" checked={checked} />
      <label onClick={handleClick}/>
    </div>
  );
};
