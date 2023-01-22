import nodemailer from 'nodemailer';

const { NEXT_PUBLIC_NODEMAILER_PASS, NEXT_PUBLIC_NODEMAILER_USER } =
  process.env;

export const transporter = nodemailer.createTransport({
  auth: {
    user: NEXT_PUBLIC_NODEMAILER_USER,
    pass: NEXT_PUBLIC_NODEMAILER_PASS,
  },
  service: 'gmail',
});
