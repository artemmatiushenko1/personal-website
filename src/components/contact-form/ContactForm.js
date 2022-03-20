import * as S from './ContactForm.style';
import SendIcon from 'public/icons/icon-send.svg';
import { useDispatch } from 'react-redux';
import { sendEmail } from 'redux/slices/contactSlice';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'redux/selectors/contact';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import { Input } from 'components/input';

const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        fullName: '',
        email: '',
        subject: '',
        message: '',
      },
      validationSchema,
      onSubmit: (values) => {
        dispatch(sendEmail(values));
      },
    });

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <Input
          id="input-full-name"
          label="Full name"
          name="fullName"
          placeholder="Full name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.fullName && Boolean(errors.fullName)}
          helperText={touched.fullName && errors.fullName}
        />
        <Input
          id="input-email"
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <Input
          id="input-subject"
          label="Subject"
          name="subject"
          placeholder="Subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.subject && Boolean(errors.subject)}
          helperText={touched.subject && errors.subject}
        />
        <Input
          isTextArea={true}
          id="input-message"
          label="Message"
          name="message"
          placeholder="Message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.message && Boolean(errors.message)}
          helperText={touched.message && errors.message}
        />
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
