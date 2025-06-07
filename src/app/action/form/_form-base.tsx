"use client";
import React, {ReactNode} from "react";
import {ActionErrorP, ActionResponseModal, Button, fnActionResponseModal, Form, InputString} from "@app/index";
import {useServerAction} from "nextjs-tools";
import ActionForm from "./_form";
import Action from "./_action";
import ImgUser from "web-asset/svg/regular/fi-rr-circle-user.svg";
import ImgKey from "web-asset/svg/regular/fi-rr-key.svg";

interface Props {
	children?: ReactNode;
}

export default function ({}: Readonly<Props>) {
	const [state, action, pending] = useServerAction(Action, ActionForm);

	return (
		<>
			<Form
				form={ActionForm}
				action={action}
				pending={pending}>
				{(onSubmit) => (
					<>
						<InputString
							{...ActionForm.username}
							imgSrc={ImgUser}
							placeholder="아이디"
							required
						/>

						<InputString
							{...ActionForm.password}
							imgSrc={ImgKey}
							placeholder="비밀번호"
							required
						/>
						<Button onClick={onSubmit}>제출</Button>
					</>
				)}
			</Form>

			<ActionErrorP
				state={state}
				printer={{}}
			/>

			<ActionResponseModal state={state}>
				{fnActionResponseModal({
					title: "로그인",
					content: "완료",
				})}
			</ActionResponseModal>
		</>
	);
}
