import * as S from './Photo.style';
import { Image } from 'components/image';

const Photo = ({ src, alt, year }) => {
  return (
    <S.ImgContainer>
      <S.Overlay>
        <div>{year}</div>
      </S.Overlay>
      <Image src={src} alt={alt} />
    </S.ImgContainer>
  );
};

export default Photo;
