import type { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = ({
  className,
  hasError = false,
  disabled,
  ...rest
}: InputProps) => {
  return (
    <input
      className={clsx(
        styles.base,
        hasError && styles.error,
        disabled && styles.disabled,
        className,
      )}
      disabled={disabled}
      {...rest}
    />
  );
};
