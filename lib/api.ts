import NodeFetchCache, { FileSystemCache } from 'node-fetch-cache';
import { Page, Settings, Image } from "../models";
import allSettingsJson from "./fallback/allSettings.json";
import getPageJson from "./fallback/getPage.json";
import { enterprises } from "./fallback/buildings";
import { AMBIENT, ENTERPRISE, FLOOR } from "../types";
import { PARKING } from "../types/parking";
import { DECORATED } from '../types/floor';

const API_URL = process.env.WORDPRESS_API_URL || 'http://qa.infinitybyor.com.br/index.php?graphql';
const WORDPRESS_URL = process.env.WORDPRESS_URL || 'http://qa.infinitybyor.com.br';

const fetch = NodeFetchCache.create({
  shouldCacheResponse: (response) => response.ok,
  cache:  new FileSystemCache({
    cacheDirectory: './.cache',
    ttl: 60000,
  })
});

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }
  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
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
  );
  return data.post;
}
const handlePage = (props: any): Page => {
  const page = Object.assign(props);
  if (page.featuredImage && page.featuredImage.node)
    page.featuredImage = page.featuredImage.node;
  return page as Page;
};

const handleGarages = (enterpriseId, garagesNode: any[]) => {
  return garagesNode
    .filter((a) => a.other_fields.enterprise.id === enterpriseId)
    .map(
      (a): PARKING => ({
        number: a.other_fields.number,
        identifier: a.other_fields.number,
        parkingslot: a?.other_fields?.parkingslot || "",
        image: a.other_fields?.image ? a.other_fields?.image?.mediaItemUrl : null,
      })
    )
    .sort((a, b) => (a.identifier > b.identifier ? 1 : -1));
};

const handleAmbients = (floorId, ambientsNode: any[]) => {
  return ambientsNode
    .filter((a) => a.details.floor.id === floorId)
    .map(
      (a): AMBIENT => ({
        title: a.title,
        coords: a.details?.coords,
        photoSrc: a.details?.image?.mediaItemUrl,
        notClickable: a.details?.notclickable,
      })
    );
};

const handleDecorated = (floorId, decoratedNode: any[]) => {
  return decoratedNode
    .filter((a) => a.custom.floor.id === floorId)
    .map(
      (a): DECORATED => ({
        title: a.title,
        floorPlanSrc: a.custom?.image?.mediaItemUrl,
        description: a.custom.description,
        subtitle: a.custom.subtitle,
      })
    );
};

const handleFloors = (
  enterpriseId,
  floorsNode: any[],
  ambientsNode: any[],
  decoratedNode: unknown[],
): FLOOR[] => {
  return floorsNode
    .filter((f) => f.floor_fields.enterpriseid?.id === enterpriseId)
    .map((f) => ({
      title: f.title,
      slug: f.slug,
      ambients: handleAmbients(f.id, ambientsNode),
      coords: {
        x: Number.parseInt(f.floor_fields.coords.split(",")[0]),
        y: Number.parseInt(f.floor_fields.coords.split(",")[1]),
      },
      floorPlanSrc: f.floor_fields?.photo?.mediaItemUrl,
      decorated: handleDecorated(f.id, decoratedNode),
    }));
};

const handleEnterprises = (
  enterpriseNode = [],
  floorsNode = [],
  ambientsNode = [],
  garagesNode = [],
  depositsNode = [],
  decoratedNode = [],
): ENTERPRISE[] => {
  return enterpriseNode.map(
    (e): ENTERPRISE => ({
      id: e.id,
      title: e.title,
      slug: e.slug,
      area: e.enterprises?.area.toLocaleString("pt-BR") + "m²",
      features: e.enterprises?.features?.split(/\r\n/),
      floors: handleFloors(e.id, floorsNode, ambientsNode, decoratedNode),
      logo: e.enterprises?.logo?.mediaItemUrl,
      bgImage: e.enterprises?.bgimage?.mediaItemUrl,
      salesTable: e.enterprises?.salestable?.mediaItemUrl,
      garages: handleGarages(e.id, garagesNode),
      deposits: handleGarages(e.id, depositsNode),
    })
  );
};

export async function getPage(slugDirty) {
  const slug = slugDirty.replace(/\//, "");
  try {
    const { menu, subpages } = await allSettings();
    const page = [...menu, ...subpages].find((page) =>
      page.slug.endsWith(slug)
    );
    return handlePage(page);
  } catch (e) {
    return getPageJson;
  }
}
type allSettingsType = {
  generalSettings: Settings;
  menu: Page[];
  subpages: Page[];
};

export async function allSettings(): Promise<allSettingsType> {
  try {
    const data = await fetchAPI(
      `
      {
        pages(first: 0, last: 100) {
          nodes {
            id
            content
            title
            slug
            uri
            menuOrder
            parent {
              node {
                slug
              }
            }
            featuredImage {
              node {
                altText
                mediaItemUrl
                sourceUrl
                sizes
              }
            }
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
      menu: data.pages.nodes
        .filter((page) => !page.parent)
        .sort((a, b) => (a.menuOrder > b.menuOrder ? 1 : -1))
        .map((page) => handlePage(page)) as Page[],
      subpages: data.pages.nodes
        .filter((page) => page.parent)
        .sort((a, b) => (a.menuOrder > b.menuOrder ? 1 : -1))
        .map((page) => handlePage(page)) as Page[],
    };
    return result;
  } catch (e) {
    return Object.assign(allSettingsJson) as allSettingsType;
  }
}

export async function getEnterprises() {
  try {
    const data = await fetchAPI(
      `
      query Enterprises {
        enterprises(first: 0, last: 100) {
          nodes {
            id
            slug
            title
            uri
            enterprises {
              area
              bgimage {
                altText
                mediaItemUrl
                sourceUrl
                sizes
              }
              features
              logo {
                altText
                mediaItemUrl
                sourceUrl
                sizes
              }
              salestable {
                altText
                mediaItemUrl
                sourceUrl
                sizes
              }
            }
          }
        }
        floors(first: 0, last: 100) {
          nodes {
            floor_fields {
              coords
              photo {
                altText
                mediaItemUrl
                sourceUrl
                sizes
              }
              enterpriseid {
                ... on Enterprise {
                  id
                }
              }
            }
            title
            uri
            slug
            id
          }
        }
        ambients(first: 0, last: 100) {
          nodes {
            title
            details {
              coords
              notclickable
              image {
                altText
                mediaItemUrl
                sourceUrl
                sizes
              }
              floor {
                ... on Floor {
                  id
                }
              }
            }
          }
        }
        garages(first: 0, last: 100) {
          nodes {
            title
            other_fields {
              image {
                altText
                mediaItemUrl
                sourceUrl
                sizes
              }
              number
              parkingslot
              enterprise {
                ... on Enterprise {
                  id
                }
              }
            }
          }
        }
        deposits(first: 0, last: 100) {
          nodes {
            title
            other_fields {
              image {
                altText
                mediaItemUrl
                sourceUrl
                sizes
              }
              number
              enterprise {
                ... on Enterprise {
                  id
                }
              }
            }
          }
        }
        decorateds {
          nodes {
            title
            custom {
              subtitle
              description
              image{
                altText
                mediaItemUrl
                sourceUrl
                sizes
              }
              floor {
                ... on Floor {
                  id
                }
              }
            }
          }
        }
      }
      `
    );
    const enterprisesNode = data.enterprises.nodes;
    const floorsNode = data.floors.nodes;
    const ambientsNode = data.ambients.nodes;
    const garagesNode = data.garages.nodes;
    const depositsNode = data.deposits.nodes;
    const decoratedNode = data.decorateds.nodes;
    const enterprises = handleEnterprises(
      enterprisesNode,
      floorsNode,
      ambientsNode,
      garagesNode,
      depositsNode,
      decoratedNode
    );
    const compare = (a, b) => a.title > a.title ? 1 : -1;
    enterprises.sort(compare);
    return enterprises;
  } catch (e) {
    console.error(e);
    return enterprises;
  }
}

export function filterSubpagesByParent(slug: string, subpages: Page[]) {
  return subpages.filter((page) => page.parent?.node?.slug === slug);
}

export async function getImagesByText(search: string): Promise<Image[]> {
  try {
    const data = await fetchAPI(
      `
  query MediaItems($search: String) {
    mediaItems(where: { search: $search }) {
        nodes {
          altText
          mediaItemUrl
          sourceUrl
          sizes
        }
    }
  }
    `,
      { variables: { search } }
    );
    const images: Image[] = data.mediaItems.nodes;
    return images.map((image) => {
      const newImage = {};
      Object.keys(image).forEach((key) => {
        if (image[key]?.toString().includes('http')) {
          const extractedPath = image[key].split('/').filter((e, i) => i > 2).join('/');
          newImage[key] = [WORDPRESS_URL, extractedPath].join('/');
        }
      });
      return { ...image, ...newImage } as Image;
    });
  } catch (e) {
    return [];
  }
}
