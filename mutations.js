/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDadosEstruturais = /* GraphQL */ `
  mutation CreateDadosEstruturais(
    $input: CreateDadosEstruturaisInput!
    $condition: ModelDadosEstruturaisConditionInput
  ) {
    createDadosEstruturais(input: $input, condition: $condition) {
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
export const updateDadosEstruturais = /* GraphQL */ `
  mutation UpdateDadosEstruturais(
    $input: UpdateDadosEstruturaisInput!
    $condition: ModelDadosEstruturaisConditionInput
  ) {
    updateDadosEstruturais(input: $input, condition: $condition) {
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
export const deleteDadosEstruturais = /* GraphQL */ `
  mutation DeleteDadosEstruturais(
    $input: DeleteDadosEstruturaisInput!
    $condition: ModelDadosEstruturaisConditionInput
  ) {
    deleteDadosEstruturais(input: $input, condition: $condition) {
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
export const createCondominio = /* GraphQL */ `
  mutation CreateCondominio(
    $input: CreateCondominioInput!
    $condition: ModelCondominioConditionInput
  ) {
    createCondominio(input: $input, condition: $condition) {
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
export const updateCondominio = /* GraphQL */ `
  mutation UpdateCondominio(
    $input: UpdateCondominioInput!
    $condition: ModelCondominioConditionInput
  ) {
    updateCondominio(input: $input, condition: $condition) {
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
export const deleteCondominio = /* GraphQL */ `
  mutation DeleteCondominio(
    $input: DeleteCondominioInput!
    $condition: ModelCondominioConditionInput
  ) {
    deleteCondominio(input: $input, condition: $condition) {
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
