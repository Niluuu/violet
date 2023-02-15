import { useState } from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { ImRadioUnchecked } from "react-icons/im";


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
        {checked ? <HiOutlineBadgeCheck fontSize={40}/> : <ImRadioUnchecked fontSize={28}/>}
      </label>
    </div>
  );
};
