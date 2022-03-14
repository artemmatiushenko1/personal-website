import * as S from './Photo.style';
import LazyLoad from 'react-lazyload';
import { Placeholder } from 'components/placeholder';
import { useRef } from 'react';

const Photo = ({ src, alt, year }) => {
  const imgRef = useRef();
  const placeholderRef = useRef();
  const onImgLoad = () => {
    imgRef.current.classList.toggle('visible');
    placeholderRef.current.remove();
  };

  return (
    <S.ImgContainer>
      <Placeholder ref={placeholderRef} />
      <LazyLoad once>
        <S.Overlay>
          <div>{year}</div>
        </S.Overlay>
        <S.Img ref={imgRef} src={src} alt={alt} onLoad={onImgLoad} />
      </LazyLoad>
    </S.ImgContainer>
  );
};

export default Photo;
