import type { TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Textarea.styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = ({
  className,
  hasError = false,
  disabled,
  ...rest
}: TextareaProps) => {
  return (
    <textarea
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
