// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../utils/emailService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData = req.body;
    try {
      // Send email using formData
      await sendEmail(formData);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
