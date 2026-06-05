const REGION: string = 'es-MX' as const;

const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString(REGION, DATE_FORMAT_OPTIONS);
};
