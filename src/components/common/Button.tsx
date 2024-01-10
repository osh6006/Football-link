import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 추가적인 프롭스가 필요한 경우 여기에 정의
  iconSrc?: string;
  color?: "main" | "secondary" | "destructive";
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  color,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "bg-init flex select-none items-center justify-center gap-2 rounded-md border px-2 py-2 text-lg transition-colors hover:bg-slate-100",
        color === "main" && "bg-Main text-White hover:bg-MainHover",
        color === "secondary" && "bg-Seondary hover:bg-SeondaryHover",
        color === "destructive" && "",
      )}
      {...props}
    >
      {props.iconSrc && <img src={props.iconSrc} alt="iconSrc" />}
      {children}
    </button>
  );
};

export default Button;
