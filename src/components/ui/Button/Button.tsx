import clsx from 'clsx';
import type { ButtonProps } from './Button.types';
import styles from './Button.styles';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...rest
}: ButtonProps) => {
  const isUnstyled = variant === 'unstyled';

  return (
    <button
      className={clsx(
        !isUnstyled && styles.buttonBase,
        styles.buttonVariants[variant],
        !isUnstyled && styles.buttonSizes[size],
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
