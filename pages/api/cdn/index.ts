

// export default async function cdn(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const paths: string[] = req.query?.file as string[] || [];
//   //
//   if (paths.length) {
//     const url = paths.join('/');
//     const response = await fetch('http://qa.infinitybyor.com.br/' + url);
//     // /wp-content/uploads/2023/12/panorama2-scaled.jpg
//     res.pipe(() => );
//   }
// }

// export default proxy()
const WORDPRESS_URL = process.env.WORDPRESS_URL  || "http://qa.infinitybyor.com.br";

import { withImageProxy } from '@blazity/next-image-proxy'

export default withImageProxy({ whitelistedPatterns: [new RegExp(WORDPRESS_URL)] })
