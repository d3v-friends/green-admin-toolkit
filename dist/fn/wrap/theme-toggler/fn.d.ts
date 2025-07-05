export type Theme = "light" | "dark";
export declare const THEME_KEY = "theme";
export declare const ThemeAll: Theme[];
declare const fnTheme: {
    validate: (t: string) => Theme;
    expect: (classNames: string[]) => Theme;
    toggle: (t?: string) => Theme;
};
export default fnTheme;
