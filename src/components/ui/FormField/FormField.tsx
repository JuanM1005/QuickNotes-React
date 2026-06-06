import type { FormFieldProps } from './FormField.types';
import styles from './FormField.styles';

export const FormField = ({
  label,
  htmlFor,
  children,
  error,
  hint,
  required = false,
}: FormFieldProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.labelRow}>
        <label htmlFor={htmlFor} className={styles.label}>
          {label}
        </label>
        {required && <span className={styles.required}>*</span>}
      </div>

      {children}

      {hint && !error && <p className={styles.hint}>{hint}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
