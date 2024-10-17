/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDadosEstruturais = /* GraphQL */ `
  subscription OnCreateDadosEstruturais(
    $filter: ModelSubscriptionDadosEstruturaisFilterInput
  ) {
    onCreateDadosEstruturais(filter: $filter) {
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
export const onUpdateDadosEstruturais = /* GraphQL */ `
  subscription OnUpdateDadosEstruturais(
    $filter: ModelSubscriptionDadosEstruturaisFilterInput
  ) {
    onUpdateDadosEstruturais(filter: $filter) {
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
export const onDeleteDadosEstruturais = /* GraphQL */ `
  subscription OnDeleteDadosEstruturais(
    $filter: ModelSubscriptionDadosEstruturaisFilterInput
  ) {
    onDeleteDadosEstruturais(filter: $filter) {
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
export const onCreateCondominio = /* GraphQL */ `
  subscription OnCreateCondominio(
    $filter: ModelSubscriptionCondominioFilterInput
  ) {
    onCreateCondominio(filter: $filter) {
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
export const onUpdateCondominio = /* GraphQL */ `
  subscription OnUpdateCondominio(
    $filter: ModelSubscriptionCondominioFilterInput
  ) {
    onUpdateCondominio(filter: $filter) {
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
export const onDeleteCondominio = /* GraphQL */ `
  subscription OnDeleteCondominio(
    $filter: ModelSubscriptionCondominioFilterInput
  ) {
    onDeleteCondominio(filter: $filter) {
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
