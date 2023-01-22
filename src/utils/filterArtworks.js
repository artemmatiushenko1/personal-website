export const filterArtworks = ({ year, category }, artworks) => {
  return artworks.filter((artwork) => {
    if (year && !category) {
      return artwork.year === year;
    }
    if (!year && category) {
      return artwork.categories.includes(category);
    }
    if (year && category) {
      return artwork.categories.includes(category) && artwork.year === year;
    }
    return artworks;
  });
};
