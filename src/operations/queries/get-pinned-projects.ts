import { graphql } from "gql.tada";
import { request } from "graphql-request";
export const RepositoryFragment = graphql(`
  fragment RepositoryFrag on Repository {
    name
    homepageUrl
    description
    url
    stargazerCount
    forkCount
    owner {
      resourcePath
    }
    languages(first: 6) {
      nodes {
        name
      }
    }
  }
`);

const query = graphql(
  `
    query pinnedProjects {
      user(login: "ajth-in") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          nodes {
            ...RepositoryFrag
          }
        }
      }
    }
  `,
  [RepositoryFragment],
);

const fetchPinnedProjects = async () => {
  try {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    if (!token) {
      throw new Error("GitHub token is required");
    }

    const result = await request(
      process.env.NEXT_PUBLIC_GITHUB_API!,
      query,
      {},
      {
        Authorization: `Bearer ${token}`,
      },
    );

    return result;
  } catch (error) {
    console.error("GraphQL query error:", error);
    throw error;
  }
};

export default fetchPinnedProjects;
