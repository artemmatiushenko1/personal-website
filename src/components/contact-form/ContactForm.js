import * as S from './ContactForm.style';
import { ReactComponent as SendIcon } from 'assets/icons/icon-send.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendEmail } from 'redux/slices/contactSlice';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'redux/selectors/contact';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const templateParams = {
      subject,
      fullName,
      email,
      message,
    };

    dispatch(sendEmail(templateParams));
  };

  const onFullNameChangeHandler = (e) => {
    setFullName(e.target.value);
  };

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubjectChangeHandler = (e) => {
    setSubject(e.target.value);
  };

  const onMessageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <S.Form onSubmit={onSubmitHandler}>
        <div>
          <S.Label htmlFor="input-full-name">Full name</S.Label>
          <S.Input
            id="input-full-name"
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={onFullNameChangeHandler}
          />
        </div>
        <div>
          <S.Label htmlFor="input-email">Your email</S.Label>
          <S.Input
            id="input-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChangeHandler}
          />
        </div>
        <div>
          <S.Label htmlFor="input-subject">Subject</S.Label>
          <S.Input
            id="input-subject"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={onSubjectChangeHandler}
          />
        </div>
        <div>
          <S.Label htmlFor="input-message">Message</S.Label>
          <S.TextArea
            id="input-message"
            placeholder="Message"
            value={message}
            onChange={onMessageChangeHandler}
          ></S.TextArea>
        </div>
        <S.Wrapper>
          <S.SendButton
            type="submit"
            icon={<SendIcon />}
            className={isLoading ? 'pressed' : null}
          >
            <div>Send</div>
          </S.SendButton>
        </S.Wrapper>
      </S.Form>
    </>
  );
};

export default ContactForm;
