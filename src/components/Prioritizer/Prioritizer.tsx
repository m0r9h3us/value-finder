import React from "react";
import classNames from "classnames";


const buttonClasses = (
  size: "sm" | "md" | "lg" | "xl" | undefined,
  primary: boolean
) =>
  classNames({
    "bg-primary-600 rounded-sm p-4": true,
    //"dark:bg-gray-800": true,
    "bg-primary-600": primary,
    "bg-secondary-600": !primary,

    "text-xl": !size || size === "xl",
    "text-lg": size === "lg",
    "text-base": size === "md",
    "text-sm": size === "sm",
  });

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "md",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className={buttonClasses(size, primary)} {...props}>
      {label}
    </button>
  );
};
//buttonClasses(size, primary)