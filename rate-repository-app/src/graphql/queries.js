import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query ($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
  repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
    edges {
      node {
        id
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        description
        language
        ownerAvatarUrl
        url
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
}
`;

export const GET_SINGLE_REPOSITORY = gql`
query ($id: ID!) {
  repository(id: $id) {
    id
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    forksCount
    description
    language
    ownerAvatarUrl
    url
  }
}`

export const GET_CURRENT_USER = gql`
  query($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
            repository {
              fullName
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_REVIEW = gql` 
query($first: Int, $after: String, $id: ID!) {
  repository(id: $id) {
    id
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    forksCount
    description
    language
    ownerAvatarUrl
    url
    reviews(first: $first, after: $after) {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
`


