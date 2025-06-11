"use server";
import {fn, fnServerAction} from "nextjs-tools";
import actionForm from "./_form";

export default async function (_: any, form: FormData) {
	return fnServerAction.parser(form, actionForm, async ({username, password, otp}) => {
		console.log(username, password, otp, "wait 1 second");
		await fn.sleep(1000);
		return "";
	});
}
