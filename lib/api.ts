import { Page, Settings } from "../models";
import allSettingsJson from './fallback/allSettings.json';
import getPageJson from './fallback/getPage.json';
import { enterprises } from './fallback/buildings';

const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getPage(slug) {
  try {
    const data = await fetchAPI(
      `
      query GETPAGE($slug: ID!) {
        page(id: $slug, idType: URI) {
          id
          content
          title
          slug
          uri
          menuOrder
        }
      }
    `,
      {
        variables: {
          slug
        },
      }
    );
    return data.page;
  } catch (e) {
    return getPageJson;
  }
}

export async function allSettings() {
  try {
    const data = await fetchAPI(
      `
      {
        pages {
          nodes {
            id
            content
            title
            slug
            uri
            menuOrder
          }
        }
        generalSettings {
          title
          url
          language
        }
      }
    `
    );
    const result = {
      generalSettings: data.generalSettings as Settings,
      menu: data.pages.nodes.sort((a, b) => a.menuOrder > b.menuOrder ? 1 : -1) as Page[],
    };
    return result;
  } catch (e) {
    return allSettingsJson;
  }
}


export async function getEnterprises() {
  return enterprises;
}
