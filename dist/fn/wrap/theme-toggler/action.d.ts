export default function (_: any, form: FormData): Promise<import("nextjs-tools").ActionState<unknown, {
    time: number;
    value: {
        reload: boolean;
        theme: import("./fn").Theme;
    };
}>>;
