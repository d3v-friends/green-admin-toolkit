"use client";
import React from "react";
import {ActionErrorP, Button, fnFormConfirmModal, FormConfirm, InputString} from "@root";
import {useServerAction} from "nextjs-tools";
import Form from "./_form";
import Action from "./_action";
import ImgUser from "web-asset/svg/regular/fi-rr-circle-user.svg";
import ImgKey from "web-asset/svg/regular/fi-rr-key.svg";

interface Props {}

export default function ({}: Readonly<Props>) {
	const [state, action, pending] = useServerAction(Action, Form);

	return (
		<>
			<FormConfirm
				action={action}
				pending={pending}
				form={Form}
				confirmModal={fnFormConfirmModal({
					title: "변경",
					content: "확인",
				})}>
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
						<input
							name="otp"
							defaultValue="123456"
							hidden
						/>
						<Button onClick={() => onToggle(true)}>제출</Button>
					</>
				)}
			</FormConfirm>

			<ActionErrorP
				state={state}
				printer={{}}
			/>
		</>
	);
}
