"use client";
import React, {useState} from "react";
import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {FnBase, fnCss, FnVoid, Nullable} from "nextjs-tools";
import fnInput from "../../../fn/input";
import ModalAlert, {AlertModalValue} from "../../modal/alert";
import Button from "../../widget/button";
import TiptapImage from "@tiptap/extension-image";
import ImgAdd from "web-asset/svg/regular/fi-rr-add-image.svg";
import Image, {StaticImageData} from "next/image";
import ImgH1 from "web-asset/svg/regular/fi-rr-h1.svg";
import ImgH2 from "web-asset/svg/regular/fi-rr-h2.svg";
import ImgH3 from "web-asset/svg/regular/fi-rr-h3.svg";
import ImgParagraph from "web-asset/svg/regular/fi-rr-align-justify.svg";
import {Color} from "@tiptap/extension-color";
import {TextStyle} from "@tiptap/extension-text-style";

interface Props {
	value: string;
	onChange: FnBase<string>;
	className?: string;
	colors?: string[];
}

export default function ({
	value,
	onChange,
	colors = ["#282b2f", "#9ba0aa", "#FF5B5B", "#f5c961", "#50a5f1", "#4EAC6D"],
	className = "",
}: Readonly<Props>) {
	const [alert, setAlert] = useState<Nullable<AlertModalValue>>();

	const editor = useEditor({
		extensions: [
			StarterKit,
			TiptapImage.configure({
				inline: true,
				allowBase64: true,
			}),
			TextStyle,
			Color.configure({
				types: ["textStyle"],
			}),
		],
		content: value,
		onUpdate: ({editor}) => {
			onChange(editor.getHTML());
		},
		editorProps: {
			attributes: {
				className: "tiptap",
			},
		},
		immediatelyRender: false,
	});

	if (!editor) return null;

	const onLoadImg = () => {
		fnInput
			.getImage()
			.then((res) => {
				editor.commands.insertContent(`<img src="${res}" alt="image"/>`);
			})
			.catch((err) =>
				setAlert({
					time: Date.now(),
					content: (
						<>
							<h6>이미지 불러오기에 실패하였습니다.</h6>
							<p>5mb 보다 작은 이미지를 사용하여 주십시오.</p>
						</>
					),
				})
			);
	};

	const toolButtons: ToolButtonItem[] = [
		{
			img: ImgAdd,
			onClick: onLoadImg,
		},
		{
			img: ImgH1,
			onClick: () => editor.commands.toggleHeading({level: 4}),
		},
		{
			img: ImgH2,
			onClick: () => editor.commands.toggleHeading({level: 5}),
		},
		{
			img: ImgH3,
			onClick: () => editor.commands.toggleHeading({level: 6}),
		},
		{
			img: ImgParagraph,
			onClick: () => editor.commands.setParagraph(),
		},
	];

	return (
		<>
			<ModalAlert value={alert} />

			<div className={fnCss.sum("relative flex flex-col", className)}>
				<div className="flex flex-wrap mb-2">
					{toolButtons.map((item, key) => (
						<ToolButton
							{...{...item}}
							key={key}
						/>
					))}
					{colors.map((item, key) => (
						<ColorButton
							color={item}
							onClick={editor.commands.setColor}
							key={key}
						/>
					))}
				</div>

				<EditorContent
					className="grow relative overflow-auto rounded-md border-all p-2"
					editor={editor}
				/>
			</div>
		</>
	);
}

type ToolButtonItem = {
	img: StaticImageData;
	onClick: FnVoid;
};

function ToolButton({img, onClick}: Readonly<ToolButtonItem>) {
	return (
		<Button
			style="outlined"
			className="mr-1 mb-1 lg:mb-0 w-10"
			onClick={onClick}>
			<Image
				src={img}
				alt="image"
				width={20}
				height={20}
			/>
		</Button>
	);
}

type ColorButtonItem = {
	color: string;
	onClick: FnBase<string>;
};

function ColorButton({color, onClick}: Readonly<ColorButtonItem>) {
	return (
		<Button
			style="outlined"
			className="mr-1 w-10 mb-1 lg:mb-0"
			onClick={() => onClick(color)}>
			<div style={{width: 20, height: 20, backgroundColor: color}} />
		</Button>
	);
}
