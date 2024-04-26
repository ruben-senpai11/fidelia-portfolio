import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Define the expected structure of form data
interface FormData {
  name: string;
  email: string;
  interests: string;
  budget: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' }); // Handle other methods
  }

  const { name, email, interests, budget } = req.body; // Destructure incoming data

  // Basic validation to ensure key fields are provided
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and Email are required' });
  }

  // Create a Nodemailer transporter with SMTP configuration from environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // SMTP server host (e.g., 'smtp.gmail.com')
    port: parseInt(process.env.EMAIL_PORT || '587', 10), // SMTP port (587 for TLS, 465 for SSL)
    secure: process.env.EMAIL_SECURE === 'true', // Secure connection (SSL/TLS)
    auth: {
      user: process.env.EMAIL_USER, // Email user (from environment variable)
      pass: process.env.EMAIL_PASS, // Email password or app-specific password
    },
  });

  // Email options, including sender, recipient, subject, and content
  const mailOptions = {
    from: `Contact Form <${process.env.EMAIL_USER}>`, // Email sender
    to: 'contact@whitedevs.agency', // Email recipient
    subject: 'New Form Submission', // Subject line
    text: `Name: ${name}\nEmail: ${email}\nInterests: ${interests}\nBudget: ${budget}`, // Email content
  };

  try {
    await transporter.sendMail(mailOptions); // Attempt to send the email
    res.status(200).json({ message: 'Email sent successfully' }); // Successful response
  } catch (error) {
    console.error('Error sending email:', error); // Log error details
    res.status(500).json({ message: 'Failed to send email' }); // Error response
  }
};
