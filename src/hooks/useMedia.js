import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const useMedia = (query) => {
  const isGivenSize = useMediaQuery(query);
  const [value, setValue] = useState(false);

  useEffect(() => {
    setValue(isGivenSize);
  }, [isGivenSize]);

  return value;
};

export default useMedia;
