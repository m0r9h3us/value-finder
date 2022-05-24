import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
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
  size = 'md',
  label,
  ...props
}: ButtonProps) => {
  console.log(`${styles.btn}-${size}`);

  return (
    <button
      type='button'
      className={cn(
        styles.btn,
        styles[`${primary ? 'primary' : 'secondary'}`],
        styles[`${size}`]
      )}
      {...props}
    >
      {label}
    </button>
  );
};
