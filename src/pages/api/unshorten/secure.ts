import { getMongoClient } from '@/lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { code, password } = req.body;
      const db = await getMongoClient();
      var result = await db.collection('secure').findOne({ code: code });
      if (!result) {
        return res.status(401).json({ success: false, message: 'Invalid id' });
      }
      result = await db.collection('secure').findOne({ code: code, password: password });
      if (!result) {
        return res.status(401).json({ success: false, message: 'Invalid password' });
      }
      await db.collection('secure').updateOne({ code: code }, { $inc: { visit: 1 } });
      return res.status(200).json({ success: true, url: result.url });
    } catch (error) {
      console.error('Error saving user data:', error);
      return res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}