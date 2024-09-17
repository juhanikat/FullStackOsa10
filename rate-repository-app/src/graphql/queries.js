import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
query($id: ID!) {
  repository(id: $id) {
    reviews {
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
      }
    }
  }
}
`


