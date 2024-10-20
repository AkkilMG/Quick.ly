import { getMongoClient } from '@/lib/mongodb';
import { shorten } from '@/lib/short';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { url } = req.body;
      if (!url) {
        return res.status(400).json({ message: 'Invalid input' });
      }
      const db = await getMongoClient();
      var result;
      var code = shorten();
      while(await db.collection('short').findOne({ code: code })) {
        code = shorten();
      }
      console.log(url, code);
      result = await db.collection('short').insertOne({
        url: url,
        code: code,
        visit: 0,
        createdAt: new Date(),
      });
      if (!result) {
        return res.status(401).json({ success: false, message: 'Invalid id' });
      }
      return res.status(200).json({ success: true, short: `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}/s/${code}` });
    } catch (error) {
      console.error('Error saving user data:', error);
      return res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}