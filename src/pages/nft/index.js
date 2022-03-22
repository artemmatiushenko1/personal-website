import * as S from 'src/styles/pages/Nft.style';
import Container from 'components/container';
import { NftCard } from 'components/nft-card';
import Head from 'next/head';
import { getFirestoreRecords } from 'lib/api';

const Nft = ({ nfts }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="List of sold and available photography NFT's created by Artem Matiushenko"
        />
        <meta
          name="keywords"
          content="Artem Matiushenko, artemko, Ukraine, photographer, portfolio, артем матюшенко, nft, links, foundation, artemko.eth"
        />
        <meta name="author" content="Artem Matiushenko" />
        <meta property="og:title" content="NFT - Artem Matiushenko" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="List of sold and available photography NFT's created by Artem Matiushenko"
        />
        <meta name="twitter:title" content="NFT - Artem Matiushenko" />
        <meta
          name="twitter:description"
          content="List of sold and available photography NFT's created by Artem Matiushenko"
        />
        <title>NFT - Artem Matiushenko</title>
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
    </>
  );
};

export const getStaticProps = async (context) => {
  const nfts = await getFirestoreRecords('nfts');

  return {
    props: { nfts },
  };
};

export default Nft;
