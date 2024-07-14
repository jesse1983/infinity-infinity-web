import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';


async function downloadBuffer(fileurl: string) {
    const options = {
        encoding: 'binary',
        headers: {},
      };

    const response = await fetch(fileurl.toString(), options); 
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    return response.buffer();
}

function getUrlAndFileName(req: NextApiRequest){
    const { fileurl } = req.query;
    const paths = fileurl.toString().split('/');
    const filename = paths[paths.length - 1].split('?')[0];
    return { fileurl: fileurl.toString(), filename };
}

export default async function download(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fileurl, filename } = getUrlAndFileName(req);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader("Content-Disposition", `attachment;filename=${filename}`);

  const buffer = await downloadBuffer(fileurl);
  res.send(buffer);
}
