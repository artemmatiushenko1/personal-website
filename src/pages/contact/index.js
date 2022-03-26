import { ContactForm } from 'components/contact-form';
import Container from 'components/container';
import { motion } from 'framer-motion';
import Head from 'next/head';
import * as S from 'src/styles/pages/Contact.style';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Contact me - Artem Matiushenko</title>
        <link
          rel="canonical"
          href="https://www.artem-matiushenko.com/contact"
        />
        <meta
          name="description"
          content="If you need to discuss something with a photographer Artem Matiushenko, you can directly contact him using this form or by his email"
        />
        <meta
          name="keywords"
          content="Artem Matiushenko, artemko, Ukraine, photographer, portfolio, артем матюшенко, photo, contact, contact me, email"
        />
        <meta property="og:title" content="Contact me - Artem Matiushenko" />
        <meta
          property="og:description"
          content="If you need to discuss something with a photographer Artem Matiushenko, you can directly contact him using this form or by his email"
        />
        <meta name="twitter:title" content="Contact me - Artem Matiushenko" />
        <meta
          name="twitter:description"
          content="If you need to discuss something with a photographer Artem Matiushenko, you can directly contact him using this form or by his email"
        />
        <meta
          name="twitter:url"
          content="https://www.artem-matiushenko.com/contact"
        />
      </Head>
      <S.Section>
        <Container>
          <S.Text>
            <S.Title>Contact me</S.Title>
            <p>
              If you need to discuss something with me or you want to purpose
              any collaboration you can reach me out directly using my email or
              by this form.
            </p>
            <S.Email>📧 artom.matyushenko@gmail.com</S.Email>
          </S.Text>
          <ContactForm />
        </Container>
      </S.Section>
    </motion.div>
  );
};

export default Contact;
