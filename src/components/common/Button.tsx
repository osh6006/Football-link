import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 추가적인 프롭스가 필요한 경우 여기에 정의
  iconSrc?: string;
  color?: "main" | "secondary" | "destructive";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "wide";
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  color,
  size,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `bg-init flex transform select-none items-center justify-center gap-2 rounded-md border px-2 py-2 text-lg
        transition-all active:scale-95
        `,
        color === "main" && "border-Main bg-Main text-White ",
        color === "secondary" && "bg-Seondary text-Main",
        color === "destructive" &&
          "border-Red bg-Red text-White hover:border-RedHover hover:bg-RedHover",
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
        size === "xl" && "text-xl",
        size === "wide" && "w-full",
        disabled && "bg-Disabled pointer-events-none border-none",
      )}
      {...props}
    >
      {props.iconSrc && <img src={props.iconSrc} alt="iconSrc" />}
      {children}
    </button>
  );
};

export default Button;
