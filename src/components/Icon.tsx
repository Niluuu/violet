import Image from "next/image";

type IconProps = {
  path: string;
  size?: 'sm' | 'md'
};

export const Icon = ({ path, size }: IconProps) => {
  return (
    <Image
      src={path}
      height={size === "md" ? 40 : 22}
      width={size === "md" ? 30 : 25}
      alt={path}
    />
  );
};
