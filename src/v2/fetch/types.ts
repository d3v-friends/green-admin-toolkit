import {QueryResult} from "nextjs-tools";

export interface DocumentTypeDecoration<TResult, TVariables> {
	__apiType?: (variables: TVariables) => TResult;
}
export class TypedDocumentString<TResult, TVariables>
	extends String
	implements DocumentTypeDecoration<TResult, TVariables>
{
	__apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];
	public __meta__?: Record<string, any> | undefined;
	private value: string;

	constructor(value: string, __meta__?: Record<string, any> | undefined) {
		super(value);
		this.value = value;
		this.__meta__ = __meta__;
	}

	toString(): string & DocumentTypeDecoration<TResult, TVariables> {
		return this.value;
	}
}

export interface Document<TResult, TVariables> {
	toString(): string & DocumentTypeDecoration<TResult, TVariables>;
}

export type Fetch<TResult, TVariables> = (
	query: Document<TResult, TVariables>,
	variables?: TVariables
) => Promise<QueryResult<TResult>>;
