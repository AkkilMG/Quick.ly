import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {

    } catch (error) {
      console.error('Error saving user data:', error);
      return res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}