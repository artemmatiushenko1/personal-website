import { Placeholder } from 'components/placeholder';
import { useRef } from 'react';
import * as S from './Image.style';

const Image = ({ src, alt }) => {
  const placeholderRef = useRef();
  const imgRef = useRef();

  const onImgLoadHandler = () => {
    imgRef.current.classList.toggle('visible');
    placeholderRef.current.remove();
  };

  return (
    <S.LazyLoadContainer once>
      <Placeholder ref={placeholderRef} />
      <S.Img ref={imgRef} src={src} alt={alt} onLoad={onImgLoadHandler} />
    </S.LazyLoadContainer>
  );
};

export default Image;
