import * as S from './ContactForm.style';
import { ReactComponent as SendIcon } from 'assets/icons/icon-send.svg';

const ContactForm = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onSendButtonClick = (e) => {
    e.target.closest('button').classList.add('pressed');

    setTimeout(() => {
      e.target.closest('button').classList.remove('pressed');
    }, 1500);
  };

  return (
    <>
      <S.Form onSubmit={onSubmitHandler}>
        <div>
          <S.Label htmlFor="input-full-name">Full name</S.Label>
          <S.Input id="input-full-name" type="text" placeholder="Full name" />
        </div>
        <div>
          <S.Label htmlFor="input-email">Your email</S.Label>
          <S.Input id="input-email" type="email" placeholder="Email" />
        </div>
        <div>
          <S.Label htmlFor="input-message">Message</S.Label>
          <S.TextArea id="input-message" placeholder="Message"></S.TextArea>
        </div>
        <S.Wrapper>
          <S.SendButton
            type="submit"
            icon={<SendIcon />}
            onClick={onSendButtonClick}
          >
            <div>Send</div>
          </S.SendButton>
        </S.Wrapper>
      </S.Form>
    </>
  );
};

export default ContactForm;
