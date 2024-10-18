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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDadosEstruturais = /* GraphQL */ `
  query SyncDadosEstruturais(
    $filter: ModelDadosEstruturaisFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDadosEstruturais(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dataconstrucao
        idadepredial
        qtdunidades
        condominioID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        startedAt
        __typename
      }
      foto
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCondominios = /* GraphQL */ `
  query SyncCondominios(
    $filter: ModelCondominioFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCondominios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nome
        endereco
        celular
        foto
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
