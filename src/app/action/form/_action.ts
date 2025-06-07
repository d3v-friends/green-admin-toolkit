"use server";
import {fn, fnServerAction} from "nextjs-tools";
import actionForm from "./_form";

export default async function (_: any, form: FormData) {
	return fnServerAction.parser(form, actionForm, async ({username, password}) => {
		console.log(username, password, "wait 1 second");
		await fn.sleep(1000);
		return "";
	});
}
