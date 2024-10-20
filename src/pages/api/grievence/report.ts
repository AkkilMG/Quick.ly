
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { type, email, message } = req.body;
      if (!type || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      const response = await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.TG_CHAT_ID,
          text: `New Grievance: #report\n\n<b>Type</b>: ${type}\n<b>Email</b>: ${email}\n<b>Message</b>: ${message}`,
          parse_mode: 'HTML',
        }),
      });
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        if (!data.ok) {
          console.log('Telegram API error');
        }
        return res.status(200).json({ success: true });
      } else {
        console.log('Telegram API error');
      }
    } catch (error) {
      console.error('Error saving user data:', error);
      return res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}