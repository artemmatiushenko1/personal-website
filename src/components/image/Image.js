import { Placeholder } from 'components/placeholder';
import { useRef, useState } from 'react';
import * as S from './Image.style';

const Image = ({ src, alt }) => {
  const placeholderRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  const onImgLoadHandler = (e) => {
    setIsLoaded(true);
    placeholderRef.current.remove();
  };

  return (
    <>
      <Placeholder ref={placeholderRef} />
      <S.Img
        src={src}
        alt={alt}
        onLoadingComplete={onImgLoadHandler}
        className={isLoaded ? 'visible' : null}
        layout="fill"
        loading="lazy"
        quality={100}
        unoptimized={true}
      />
    </>
  );
};

export default Image;
