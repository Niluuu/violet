import { GiCheckMark } from "react-icons/Gi";
import { RiErrorWarningLine } from "react-icons/Ri";
import { TbFaceIdError } from "react-icons/Tb";

type AlertProps = {
  errorType: "succsess" | "error" | "warning";
  message: string;
};

export const Alert = ({ errorType, message }: AlertProps) => {
  return (
    <div className={`alert  alert_${errorType}`}>
      {errorType === "succsess" ? <GiCheckMark /> : null}
      {errorType === "error" ? <TbFaceIdError /> : null}
      {errorType === "warning" ? <RiErrorWarningLine /> : null}
      <p>{message}</p>
    </div>
  );
};
