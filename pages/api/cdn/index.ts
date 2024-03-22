

const WORDPRESS_URL = process.env.WORDPRESS_URL || "http://qa.infinitybyor.com.br";

import { withImageProxy } from '@blazity/next-image-proxy';

export default withImageProxy({ whitelistedPatterns: [new RegExp(WORDPRESS_URL)] })
