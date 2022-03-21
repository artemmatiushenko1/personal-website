import * as S from './ContactForm.style';
import SendIcon from 'public/icons/icon-send.svg';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import { Input } from 'components/input';
import { sendEmail } from 'lib/api';
import { useState } from 'react';

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        fullName: '',
        email: '',
        subject: '',
        message: '',
      },
      validationSchema,
      onSubmit: async (values) => {
        setIsSending(true);
        await sendEmail(values);
        setIsSending(false);
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
            className={isSending ? 'pressed' : null}
          >
            <div>Send</div>
          </S.SendButton>
        </S.Wrapper>
      </S.Form>
    </>
  );
};

export default ContactForm;
