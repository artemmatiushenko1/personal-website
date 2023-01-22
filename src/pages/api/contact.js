import { transporter } from 'src/config/nodemailder';

const { NEXT_PUBLIC_NODEMAILER_USER } = process.env;

export default async (req, res) => {
  if (req.method !== 'POST') return res.status(400).send('Bad Request');

  const { subject, email, message, fullName } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: NEXT_PUBLIC_NODEMAILER_USER,
      subject,
      text: `From ${email} ${fullName} \n ${message}`,
    });

    res.status(200).json({ sent: true });
  } catch {
    res.status(400).json({ sent: false });
  }
};
