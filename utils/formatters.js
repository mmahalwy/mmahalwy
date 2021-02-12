import dayjs from 'dayjs';

export function formatSEODate(dateString, dateModified = false) {
  if (!dateString && dateModified) {
    return '';
  }
  return dateString
    ? new Date(dateString).toISOString()
    : new Date().toISOString();
}

export function formatDisplayDate(dateString) {
  return dayjs(dateString).format('MMMM DD, YYYY');
}

export function getSecondsSinceEpoch(dateString) {
  return new Date(dateString).getTime() / 1000;
}
