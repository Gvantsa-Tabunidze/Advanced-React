import { gql } from "@apollo/client";

export const GET_SINGLE_GAME = gql`
query SingleGame($gameId: ID!){
  game(id: $gameId) {
        id
        title
        platform
    }
}

`