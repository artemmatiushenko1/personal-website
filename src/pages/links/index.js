import Container from 'components/container';
import * as S from 'src/styles/pages/Links.style';
import logoFoundation from 'public/images/logo-foundation.png';
import logoInstagram from 'public/images/logo-instagram.png';
import logoYouTube from 'public/images/logo-youtube.png';
import logoFilterGrade from 'public/images/logo-fg.png';
import logoTwitter from 'public/images/logo-twitter.png';
import LinkBox from 'components/link-box/LinkBox';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { pageVariants } from 'styles/animations/pageVariants';

const metadata = {
  description:
    'Useful social media links (instagram, twitter, youtube, tiktok), nft, lightroom presets and other resourses by Artem Matiushenko',
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
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Links - Artem Matiushenko</title>
        <link rel="canonical" href="https://www.artem-matiushenko.com/links" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Artem Matiushenko, artemko, Ukraine, photographer, portfolio, артем матюшенко, nft, links, social media, presets"
        />
        <meta property="og:title" content="Links - Artem Matiushenko" />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:title" content="Links - Artem Matiushenko" />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:url"
          content="https://www.artem-matiushenko.com/links"
        />
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
    </motion.div>
  );
};

export default Links;
