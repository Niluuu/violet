type IconButtonProps = {
  circle?: boolean;
  title?: string;
  icon?: any;
  onClick?: () => void;
};

export const IconButton = ({
  title,
  icon,
  onClick,
  circle,
}: IconButtonProps) => {
  return (
    <div
      className={circle ? "btn btn_icon btn_circle" : "btn btn_icon"}
      onClick={onClick}
    >
      <div className="icon">{icon}</div>
      {title ? <p>{title}</p> : null}
    </div>
  );
};
