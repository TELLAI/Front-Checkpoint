import {gql} from "@apollo/client";

export const getContinents = gql`
query continents {
  continents  {
    code
    name
  }
}
`;

export const getOneContinent = gql`
query continents ($code: ID!){
  continent (code: $code) {
    code
    name
    countries{code
    name}
  }
}
`
