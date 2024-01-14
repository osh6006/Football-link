import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 추가적인 프롭스가 필요한 경우 여기에 정의
  iconSrc?: string;
  color?: "main" | "secondary" | "destructive";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "wide";
}

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  wide: "w-full",
};

const colors = {
  main: "border-Main bg-Main text-White ",
  secondary: "bg-Seondary text-Main",
  destructive:
    "border-Red bg-Red text-White hover:border-RedHover hover:bg-RedHover",
};

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  color,
  size,
  disabled,
  iconSrc,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `${className} flex transform select-none items-center justify-center gap-2 rounded-md border px-2 py-2 text-lg
        transition-all active:scale-95
        `,
        disabled
          ? "pointer-events-none border-transparent bg-Disabled text-DisabledColor"
          : color && colors[color],
        size && sizes[size],
      )}
      {...props}
    >
      {iconSrc && <img src={iconSrc} alt="iconSrc" />}
      {children}
    </button>
  );
};

export default Button;
