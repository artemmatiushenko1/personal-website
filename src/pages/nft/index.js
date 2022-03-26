import * as S from 'src/styles/pages/Nft.style';
import Container from 'components/container';
import { NftCard } from 'components/nft-card';
import Head from 'next/head';
import { getFirestoreRecords } from 'lib/api';
import { motion } from 'framer-motion';

const Nft = ({ nfts }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>NFT - Artem Matiushenko</title>
        <link rel="canonical" href="https://www.artem-matiushenko.com/nft" />
        <meta
          name="description"
          content="List of sold and available photography NFT's created by Artem Matiushenko"
        />
        <meta
          name="keywords"
          content="Artem Matiushenko, artemko, Ukraine, photographer, portfolio, артем матюшенко, nft, links, foundation, artemko.eth"
        />
        <meta property="og:title" content="NFT - Artem Matiushenko" />
        <meta
          property="og:description"
          content="List of sold and available photography NFT's created by Artem Matiushenko"
        />
        <meta name="twitter:title" content="NFT - Artem Matiushenko" />
        <meta
          name="twitter:description"
          content="List of sold and available photography NFT's created by Artem Matiushenko"
        />
        <meta
          name="twitter:url"
          content="https://www.artem-matiushenko.com/nft"
        />
      </Head>
      <S.Section>
        <Container>
          {nfts.map(
            ({
              title,
              description,
              imgUrl,
              price,
              sold,
              edition,
              platform,
              url,
            }) => {
              return (
                <NftCard
                  key={title}
                  title={title}
                  description={description}
                  imgUrl={imgUrl}
                  price={price}
                  sold={sold}
                  edition={edition}
                  platform={platform}
                  url={url}
                />
              );
            }
          )}
        </Container>
      </S.Section>
    </motion.div>
  );
};

export const getStaticProps = async (context) => {
  const nfts = await getFirestoreRecords('nfts');

  return {
    props: { nfts },
  };
};

export default Nft;
