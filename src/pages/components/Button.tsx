type ButtonProps = {
  type: "primary";
  title: string;
  onClick?: () => void;
};

export const Button = ({ type, title, onClick }: ButtonProps) => {
  return (
    <div
      className={type === "primary" ? "btn btn_primary" : "btn"}
      onClick={onClick}
    >
      <p>{title}</p>
    </div>
  );
};
