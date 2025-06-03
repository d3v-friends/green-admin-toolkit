export type Theme = "light" | "dark";
export const THEME_KEY = "theme";
export const ThemeAll: Theme[] = ["light", "dark"];

const fnTheme = {
	validate: (t: string): Theme => {
		for (const e of ThemeAll) {
			if (t === e) return e;
		}
		return "light";
	},
	expect: (classNames: string[]): Theme => {
		for (const c of classNames) {
			const idx = ThemeAll.findIndex((v) => v === c);
			if (idx != -1) return ThemeAll[idx];
		}
		return "light";
	},
	toggle: (t?: string): Theme => {
		const prev = fnTheme.validate(t || "light");
		const idx = ThemeAll.findIndex((v) => v === prev);
		return idx === ThemeAll.length - 1 ? ThemeAll[0] : ThemeAll[idx + 1];
	},
};

export default fnTheme;
