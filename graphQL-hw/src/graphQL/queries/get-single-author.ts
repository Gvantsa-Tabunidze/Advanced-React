import { gql } from "@apollo/client";


export const GET_SINGLE_AUTHOR = gql`
query Author($authorId: ID!) {
  author(id: $authorId) {
    name
    verified
  }
}
`