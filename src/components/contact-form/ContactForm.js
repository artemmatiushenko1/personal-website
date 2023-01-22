import * as S from './ContactForm.style';
import SendIcon from 'public/icons/icon-send.svg';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import { Input } from 'components/input';
import { sendEmail } from 'lib/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const SendButtonText = {
  Initial: 'Send',
  InProgress: 'Sending',
  Done: 'Sent',
};

const sendButtonVariants = {
  icon: {
    initial: {
      x: 0,
      opacity: 1,
    },
    in: {
      x: '100%',
      opacity: 0,
    },
  },
  text: {
    initial: {
      x: 0,
    },
    in: {
      x: '18px',
    },
  },
  transition: {
    default: { ease: 'linear' },
  },
};

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [sendButtonText, setSendButtonText] = useState(SendButtonText.Initial);
  const sendButtonAnimationControls = useAnimationControls();

  const onSubmit = async (values) => {
    setIsSending(true);

    const sent = await sendEmail(values);

    if (sent) {
      setSendButtonText(SendButtonText.Done);
    }

    setTimeout(() => {
      setSendButtonText(SendButtonText.Initial);
      sendButtonAnimationControls.start('initial');
      setIsSending(false);
    }, 1500);

    resetForm();
  };

  useEffect(() => {
    if (isSending) {
      sendButtonAnimationControls.start('in');
      setSendButtonText(SendButtonText.InProgress);
    }
  }, [isSending]);

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
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
          disabled={isSending}
          type="submit"
          icon={
            <motion.div
              transition={sendButtonVariants.transition}
              animate={sendButtonAnimationControls}
              variants={sendButtonVariants.icon}
            >
              <SendIcon />
            </motion.div>
          }
        >
          <motion.div
            transition={sendButtonVariants.transition}
            animate={sendButtonAnimationControls}
            variants={sendButtonVariants.text}
          >
            {sendButtonText}
          </motion.div>
        </S.SendButton>
      </S.Wrapper>
    </S.Form>
  );
};

export default ContactForm;
