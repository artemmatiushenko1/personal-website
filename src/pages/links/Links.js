import Container from 'components/container';
import * as S from './Links.style';
import logoFoundation from 'assets/icons/logo-foundation.svg';
import logoInstagram from 'assets/icons/logo-instagram.svg';
import logoYouTube from 'assets/icons/logo-youtube.svg';
import logoFilterGrade from 'assets/icons/logo-fg.svg';
import logoTwitter from 'assets/icons/logo-twitter.svg';

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

const links = [
  {
    img: logoFoundation,
    title: 'Foundation | NFT',
    desc: 'Emotions collection',
    url: 'https://foundation.app/collection/em',
  },
  {
    img: logoInstagram,
    title: 'Instagram | @_artemko',
    desc: 'https://www.instagram.com/_artemko',
    url: 'https://www.instagram.com/_artemko',
  },
  {
    img: logoYouTube,
    title: 'YouTube channel',
    desc: 'https://www.youtube.com/channel/UC0m6XuM0ZWwCA_mFeD2zSKA',
    url: 'https://www.youtube.com/channel/UC0m6XuM0ZWwCA_mFeD2zSKA',
  },
  {
    img: logoTwitter,
    title: 'Twitter | @_artemko',
    desc: 'https://www.twitter.com/_artemko',
    url: 'https://www.twitter.com/_artemko',
  },
  {
    img: logoFilterGrade,
    title: 'Lightroom presets',
    desc: '54 presets for PC & Mobile',
    url: 'https://filtergrade.com/product/mega-pack-2020-54-presets-by-artem-matiushenko-_artemko-mobile-pc-presets/',
  },
];

const Links = () => {
  return (
    <S.Section>
      <Container>
        <S.Grid>
          {links.map(({ title, desc, url, img }) => {
            return (
              <LinkBox
                key={title}
                img={img}
                title={title}
                desc={desc}
                url={url}
              />
            );
          })}
        </S.Grid>
      </Container>
    </S.Section>
  );
};

export default Links;
