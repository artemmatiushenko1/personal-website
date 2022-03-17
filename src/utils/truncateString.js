export const truncateString = (string, maxLength = 125) => {
  return string.split('').slice(0, maxLength).join('') + '...';
};
