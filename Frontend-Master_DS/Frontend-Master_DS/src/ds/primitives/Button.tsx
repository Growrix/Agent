import * as React from "react";
import { cx } from "../utils/cx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "text" | "icon" | "fab";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonTone = "accent" | "danger" | "success";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  {
    as,
    className,
    variant = "primary",
    size = "md",
    tone,
    isLoading,
    loadingText,
    type,
    disabled,
    children,
    ...props
  },
  ref,
) {
  const Tag = (as ?? "button") as React.ElementType;
  const computedDisabled = Boolean(disabled || isLoading);
  const defaultType = Tag === "button" ? (type ?? "button") : undefined;

  return (
    <Tag
      ref={ref}
      type={defaultType}
      disabled={Tag === "button" ? computedDisabled : undefined}
      aria-disabled={computedDisabled || undefined}
      aria-busy={isLoading || undefined}
      className={cx(
        "ui-button ui-focus-ring",
        `ui-button--${variant}`,
        `ui-button--${size}`,
        tone && `ui-button--tone-${tone}`,
        isLoading && "ui-button--loading",
        className,
      )}
      {...props}
    >
      {isLoading ? (loadingText ?? "Loading\u2026") : children}
    </Tag>
  );
});
