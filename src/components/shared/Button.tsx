import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export default function Button({
  onClick,
  children,
  disabled,
  style,
}: ButtonProps) {
  return (
    <button
      className="px-6 py-2 bg-gradient-to-r flex items-center gap-x-1
       from-[#0056A6] via-[#007ACC] to-[#00A6ED] cursor-pointer
       text-primary text-lg font-normal h-fit min-h-10 rounded-[42px]"
      onClick={onClick}
      type="button"
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}
