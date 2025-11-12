export type Fetch<T> = () => Promise<{
    data: T;
    error?: Error;
}>;
