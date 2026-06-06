import type { ReactNode } from 'react';

export interface FormFieldProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
  error?: string;
  hint?: string;
  required?: boolean;
}
