/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDadosEstruturais = /* GraphQL */ `
  query GetDadosEstruturais($id: ID!) {
    getDadosEstruturais(id: $id) {
      id
      dataconstrucao
      idadepredial
      qtdunidades
      condominioID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDadosEstruturais = /* GraphQL */ `
  query ListDadosEstruturais(
    $filter: ModelDadosEstruturaisFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDadosEstruturais(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dataconstrucao
        idadepredial
        qtdunidades
        condominioID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const dadosEstruturaisByCondominioID = /* GraphQL */ `
  query DadosEstruturaisByCondominioID(
    $condominioID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDadosEstruturaisFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dadosEstruturaisByCondominioID(
      condominioID: $condominioID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dataconstrucao
        idadepredial
        qtdunidades
        condominioID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCondominio = /* GraphQL */ `
  query GetCondominio($id: ID!) {
    getCondominio(id: $id) {
      id
      nome
      endereco
      celular
      rsDadosEstruturais {
        nextToken
        __typename
      }
      foto
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCondominios = /* GraphQL */ `
  query ListCondominios(
    $filter: ModelCondominioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCondominios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        endereco
        celular
        foto
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
