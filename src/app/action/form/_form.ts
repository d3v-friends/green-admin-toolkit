import {fnServerAction} from "nextjs-tools";

export default fnServerAction.forms.createForm({
	username: fnServerAction.inputs.username({}),
	password: fnServerAction.inputs.password({}),
	otp: fnServerAction.inputs.otp({}),
});
