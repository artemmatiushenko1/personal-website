import Container from 'components/container';
import * as S from './index.style';
import logoFoundation from 'public/images/logo-foundation.png';
import logoInstagram from 'public/images/logo-instagram.png';
import logoYouTube from 'public/images/logo-youtube.png';
import logoFilterGrade from 'public/images/logo-fg.png';
import logoTwitter from 'public/images/logo-twitter.png';
import LinkBox from 'components/link-box/LinkBox';
import Head from 'next/head';

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
    <>
      <Head>
        <meta
          name="description"
          content="Useful social media links (instagram, twitter, youtube, tiktok), nft, lightroom presets and other resourses by Artem Matiushenko"
        />
        <meta
          name="keywords"
          content="Artem Matiushenko, artemko, Ukraine, photographer, portfolio, артем матюшенко, nft, links, social media, presets"
        />
        <meta name="author" content="Artem Matiushenko" />
        <meta property="og:title" content="Links - Artem Matiushenko" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Useful social media links (instagram, twitter, youtube, tiktok), nft, lightroom presets and other resourses by Artem Matiushenko"
        />
        <title>Links - Artem Matiushenko</title>
      </Head>
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
    </>
  );
};

export default Links;
