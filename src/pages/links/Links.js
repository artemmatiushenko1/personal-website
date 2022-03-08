import Container from 'components/container';
import * as S from './Links.style';
import photo from 'assets/icons/logo-foundation.svg';

const LinkBox = ({ title, desc, img, url }) => {
  return (
    <S.Box>
      <S.Link href={url} target="_blank">
        <S.Img src={img} alt={title} />
        <S.Text>
          <S.Title>{title}</S.Title>
          <S.Desc>{desc}</S.Desc>
        </S.Text>
      </S.Link>
    </S.Box>
  );
};

const Links = () => {
  return (
    <S.Section>
      <Container>
        <S.Grid>
          <LinkBox
            img={photo}
            title="Instagram | @_artemko"
            desc="https://www.instagram.com/_artemko"
            url="https://www.instagram.com/_artemko"
          />
          <LinkBox
            img={photo}
            title="Instagram | @_artemko"
            desc="https://www.instagram.com/_artemko"
            url="https://www.instagram.com/_artemko"
          />
          <LinkBox
            img={photo}
            title="Instagram | @_artemko"
            desc="https://www.instagram.com/_artemko"
            url="https://www.instagram.com/_artemko"
          />
          <LinkBox
            img={photo}
            title="Instagram | @_artemko"
            desc="https://www.instagram.com/_artemko"
            url="https://www.instagram.com/_artemko"
          />
        </S.Grid>
      </Container>
    </S.Section>
  );
};

export default Links;
