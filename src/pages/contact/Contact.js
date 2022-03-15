import { ContactForm } from 'components/contact-form';
import Container from 'components/container';
import * as S from './Contact.style';

const Contact = () => {
  return (
    <S.Section>
      <Container>
        <S.Text>
          <S.Title>Contact me</S.Title>
          <p>
            If you need discuss something with me or purpose any collaboration
            you can reach me out directly using my email or by this form.
          </p>
          <S.Email>📧 artom.matyushenko@gmail.com</S.Email>
        </S.Text>
        <ContactForm />
      </Container>
    </S.Section>
  );
};

export default Contact;
