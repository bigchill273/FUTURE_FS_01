import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "sm" | "default" | "lg";
    href?: string;
  }
>;

export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-5.5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className} hover:scale-110 duration-1000 ease-in-out`;

  if (href) {
    return (
      <a
        href={href}
        className={`${classes} relative inline-flex items-center justify-center gap-2`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${classes} inline-flex items-center justify-center gap-2`} {...props}>
      {children}
    </button>
  );
};
