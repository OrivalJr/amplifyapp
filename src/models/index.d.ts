import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerDadosEstruturais = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DadosEstruturais, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dataconstrucao: string;
  readonly idadepredial: number;
  readonly qtdunidades: number;
  readonly condominioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDadosEstruturais = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DadosEstruturais, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dataconstrucao: string;
  readonly idadepredial: number;
  readonly qtdunidades: number;
  readonly condominioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DadosEstruturais = LazyLoading extends LazyLoadingDisabled ? EagerDadosEstruturais : LazyDadosEstruturais

export declare const DadosEstruturais: (new (init: ModelInit<DadosEstruturais>) => DadosEstruturais) & {
  copyOf(source: DadosEstruturais, mutator: (draft: MutableModel<DadosEstruturais>) => MutableModel<DadosEstruturais> | void): DadosEstruturais;
}

type EagerCondominio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Condominio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly endereco: string;
  readonly celular: string;
  readonly rsDadosEstruturais?: (DadosEstruturais | null)[] | null;
  readonly foto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCondominio = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Condominio, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome: string;
  readonly endereco: string;
  readonly celular: string;
  readonly rsDadosEstruturais: AsyncCollection<DadosEstruturais>;
  readonly foto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Condominio = LazyLoading extends LazyLoadingDisabled ? EagerCondominio : LazyCondominio

export declare const Condominio: (new (init: ModelInit<Condominio>) => Condominio) & {
  copyOf(source: Condominio, mutator: (draft: MutableModel<Condominio>) => MutableModel<Condominio> | void): Condominio;
}