"use client";
import React from "react";
import {Button, FormOTP, InputString} from "@app/index";
import {useServerAction} from "nextjs-tools";
import Action from "./_action";
import Form from "./_form";
import ImgUser from "web-asset/svg/regular/fi-rr-circle-user.svg";
import ImgKey from "web-asset/svg/regular/fi-rr-key.svg";

interface Props {}

export default function ({}: Readonly<Props>) {
	const [state, action, pending] = useServerAction(Action, Form);
	return (
		<FormOTP
			action={action}
			pending={pending}
			form={Form}>
			{(onToggle) => (
				<>
					<InputString
						{...Form.username}
						imgSrc={ImgUser}
						placeholder="아이디"
						required
					/>

					<InputString
						{...Form.password}
						imgSrc={ImgKey}
						placeholder="비밀번호"
						required
					/>

					<Button onClick={() => onToggle(true)}>제출</Button>
				</>
			)}
		</FormOTP>
	);
}
