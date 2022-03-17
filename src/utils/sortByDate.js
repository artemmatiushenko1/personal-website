export const sortByDate = (artworks) => {
  return [...artworks].sort((a, b) => {
    return Date.parse(b.createdAt) - Date.parse(a.createdAt);
  });
};
