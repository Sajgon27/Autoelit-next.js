import Link from "next/link";
import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export default function Button({
  variant = "primary",
  className = "",
  children,
  href,
  icon,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "flex gap-2 w-fit items-center min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 hover:bg-red-700 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]";

  const variantStyles =
    variant === "primary"
      ? "bg-primary hover:bg-red-700"
      : "bg-secondary hover:bg-gray-700";
  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={combinedStyles} type="button">
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
