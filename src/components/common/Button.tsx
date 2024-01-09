import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 추가적인 프롭스가 필요한 경우 여기에 정의
  iconSrc?: string;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="flex items-center justify-center gap-2 rounded-md border px-2 py-3 text-lg"
      {...props}
    >
      {props.iconSrc && <img src={props.iconSrc} alt="iconSrc" />}
      {children}
    </button>
  );
};

export default Button;
