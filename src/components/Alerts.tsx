import { Icon } from "./Icon";

type AlertProps = {
  errorType: "succsess" | "error" | "warning";
  message: string;
};

export const Alert = ({ errorType, message }: AlertProps) => {
  return (
    <div className={`alert  alert_${errorType}`}>
      {errorType === "succsess" ? <Icon path="/images/done.svg" /> : null}
      {errorType === "error" ? <Icon path="/images/error.svg" /> : null}
      {errorType === "warning" ? <Icon path="/images/warning.svg" /> : null}
      <p>{message}</p>
    </div>
  );
};
