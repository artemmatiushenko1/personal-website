import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches) {
      setMatches(media.matches);
    }

    const onChange = (e) => {
      setMatches(e.matches);
    };

    media.onchange = onChange;

    return media.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
