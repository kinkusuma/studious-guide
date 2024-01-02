export function formatThousands(value: string): string {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatDatetime(value: string): string {
  return new Date(value).toLocaleString();
}

export function getIdFromUrl(url: string) {
  return url.split('/').filter(Boolean).pop() || '0';
}
