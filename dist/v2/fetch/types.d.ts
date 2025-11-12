import { QueryResult } from "nextjs-tools";
export interface DocumentTypeDecoration<TResult, TVariables> {
    __apiType?: (variables: TVariables) => TResult;
}
export declare class TypedDocumentString<TResult, TVariables> extends String implements DocumentTypeDecoration<TResult, TVariables> {
    __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];
    __meta__?: Record<string, any> | undefined;
    private value;
    constructor(value: string, __meta__?: Record<string, any> | undefined);
    toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}
export interface Document<TResult, TVariables> {
    toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}
export type Fetch<TResult, TVariables> = (query: Document<TResult, TVariables>, variables?: TVariables) => Promise<QueryResult<TResult>>;
