import * as S from './LinkBox.styled';

const LinkBox = ({ title, desc, img, url }) => {
  return (
    <S.Box>
      <S.Link href={url} target="_blank">
        <S.Img src={img} alt={title} quality={100} />
        <div>
          <S.Title>{title}</S.Title>
          <S.Desc>{desc}</S.Desc>
        </div>
      </S.Link>
    </S.Box>
  );
};

export default LinkBox;
