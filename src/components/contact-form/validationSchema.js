import * as yup from 'yup';

const validationSchema = yup.object({
  fullName: yup.string().trim().required('Full name is required'),
  subject: yup.string().trim().required('Subject is required'),
  message: yup.string().trim().required('Message is required'),
  email: yup
    .string()
    .trim()
    .email('Invalid email')
    .required('Email is required'),
});

export default validationSchema;
