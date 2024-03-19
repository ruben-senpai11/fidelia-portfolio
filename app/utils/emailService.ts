// utils/emailService.ts
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  interests: string,
  budget: string
}

export async function sendEmail(formData:any) {
  // Create a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'rubensenpai11@gmail.com', // Your email address
      pass: 'your-password', // Your email password
    },
  });

  // Setup email data
  const mailOptions = {
    from: formData.email,
    to: 'rubensenpai11@gmail.com', // Your email address
    subject: `Message from White Devs Site > ${formData.name}`,
    text: formData.message,
  };

  // Send email
  return transporter.sendMail(mailOptions);
}


