

const WORDPRESS_URL = process.env.WORDPRESS_URL || "https://admin.caisbyor.com.br";

import { withImageProxy } from '@blazity/next-image-proxy';

export default withImageProxy({ whitelistedPatterns: [new RegExp(WORDPRESS_URL)] })
