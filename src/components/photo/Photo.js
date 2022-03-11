import * as S from './Photo.style';
import LazyLoad from 'react-lazyload';

const Photo = ({ src, alt }) => {
  return (
    <S.ImgContainer>
      <LazyLoad height={350} once offset={100}>
        <S.Img src={src} alt={alt} />
      </LazyLoad>
    </S.ImgContainer>
  );
};

export default Photo;
