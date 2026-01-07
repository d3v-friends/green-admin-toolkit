"use server";
import {cookies} from "next/headers";
import {fnServerAction} from "nextjs-tools";
import {default as fnTheme, THEME_KEY} from "./fn";
import actionForm from "./form";

export default async function (_: any, form: FormData) {
	return fnServerAction.parser(form, actionForm, async () => {
		const c = await cookies();
		const prev = fnTheme.validate(c.get(THEME_KEY)?.value || "light");
		const next = fnTheme.toggle(prev);

		if (prev !== next) {
			c.set(THEME_KEY, next);
		}

		return {
			time: new Date().getTime(),
			value: {
				reload: prev !== next,
				theme: next,
			},
		};
	});
}
