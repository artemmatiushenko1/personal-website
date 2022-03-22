import { ContactForm } from 'components/contact-form';
import Container from 'components/container';
import Head from 'next/head';
import * as S from 'src/styles/pages/Contact.style';

const Contact = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="If you need to discuss something with a photographer Artem Matiushenko, you can directly contact him using this form or by his email"
        />
        <meta
          name="keywords"
          content="Artem Matiushenko, artemko, Ukraine, photographer, portfolio, артем матюшенко, photo, contact, contact me, email"
        />
        <meta name="author" content="Artem Matiushenko" />
        <meta property="og:title" content="Contact me - Artem Matiushenko" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="If you need to discuss something with a photographer Artem Matiushenko, you can directly contact him using this form or by his email"
        />
        <meta name="twitter:title" content="Contact me - Artem Matiushenko" />
        <meta
          name="twitter:description"
          content="If you need to discuss something with a photographer Artem Matiushenko, you can directly contact him using this form or by his email"
        />
        <title>Contact me - Artem Matiushenko</title>
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
    </>
  );
};

export default Contact;
