import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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

export const CURRENTLY_SIGNED_IN = gql`
  query {
    me {
      id
      username
    }
  }
`;


