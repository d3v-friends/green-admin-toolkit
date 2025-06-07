import React, {ReactNode} from "react";
import {ModalBase} from "@app/index";

interface Props {
	pending: boolean;
	children?: ReactNode;
}

// todo pending 이 true 후 1초 정도 뒤에 배경이 검정으로 나오도록 나중에 수정하기
// 이유 : 너무 자주 깜빡거리게 됨
export default function ({children, pending}: Readonly<Props>) {
	if (!pending) return null;

	return <ModalBase>{children || <div className="text-(--text-1)">로딩중...</div>}</ModalBase>;
}
