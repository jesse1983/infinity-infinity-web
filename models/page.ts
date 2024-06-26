export type Page = {
    id: number,
    title: string,
    menuOrder: number,
    uri: string,
    slug: string,
    content: string,
    featuredImage?: Image;
    parent?: any

}

export type Image = {
  altText: string;
  description?: string;
  mediaItemUrl: string;
  sourceUrl: string;
  sizes: string;
}
