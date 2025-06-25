"use client";
import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { fnCss } from "nextjs-tools";
import "../../../../asset/style/tiptap.scss";
import { Button, fnInput, ModalAlert } from "../../../index.js";
import TiptapImage from "@tiptap/extension-image";
import ImgAdd from "web-asset/svg/regular/fi-rr-add-image.svg";
import Image from "next/image";
import ImgH1 from "web-asset/svg/regular/fi-rr-h1.svg";
import ImgH2 from "web-asset/svg/regular/fi-rr-h2.svg";
import ImgH3 from "web-asset/svg/regular/fi-rr-h3.svg";
import ImgParagraph from "web-asset/svg/regular/fi-rr-align-justify.svg";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
export default function ({ value, onChange, colors = ["#282b2f", "#9ba0aa", "#FF5B5B", "#f5c961", "#50a5f1", "#4EAC6D"], className = "", }) {
    const [alert, setAlert] = useState();
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
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                className: "tiptap",
            },
        },
        immediatelyRender: false,
    });
    if (!editor)
        return null;
    const onLoadImg = () => {
        fnInput
            .getImage()
            .then((res) => {
            editor.commands.insertContent(`<img src="${res}" alt="image"/>`);
        })
            .catch((err) => setAlert({
            time: Date.now(),
            content: (_jsxs(_Fragment, { children: [_jsx("h6", { children: "\uC774\uBBF8\uC9C0 \uBD88\uB7EC\uC624\uAE30\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4." }), _jsx("p", { children: "5mb \uBCF4\uB2E4 \uC791\uC740 \uC774\uBBF8\uC9C0\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624." })] })),
        }));
    };
    const toolButtons = [
        {
            img: ImgAdd,
            onClick: onLoadImg,
        },
        {
            img: ImgH1,
            onClick: () => editor.commands.toggleHeading({ level: 4 }),
        },
        {
            img: ImgH2,
            onClick: () => editor.commands.toggleHeading({ level: 5 }),
        },
        {
            img: ImgH3,
            onClick: () => editor.commands.toggleHeading({ level: 6 }),
        },
        {
            img: ImgParagraph,
            onClick: () => editor.commands.setParagraph(),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ModalAlert, { value: alert }), _jsxs("div", { className: fnCss.sum("relative flex flex-col", className), children: [_jsxs("div", { className: "flex flex-wrap mb-2", children: [toolButtons.map((item, key) => (_createElement(ToolButton, Object.assign({}, item, { key: key })))), colors.map((item, key) => (_jsx(ColorButton, { color: item, onClick: editor.commands.setColor }, key)))] }), _jsx(EditorContent, { className: "grow relative overflow-auto rounded-md border-all p-2", editor: editor })] })] }));
}
function ToolButton({ img, onClick }) {
    return (_jsx(Button, { style: "outlined", className: "mr-1 mb-1 lg:mb-0 w-10", onClick: onClick, children: _jsx(Image, { src: img, alt: "image", width: 20, height: 20 }) }));
}
function ColorButton({ color, onClick }) {
    return (_jsx(Button, { style: "outlined", className: "mr-1 w-10 mb-1 lg:mb-0", onClick: () => onClick(color), children: _jsx("div", { style: { width: 20, height: 20, backgroundColor: color } }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9lZGl0b3IvdGlwdGFwL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQUNiLE9BQWMsRUFBQyxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDdEMsT0FBTyxFQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxFQUFTLEtBQUssRUFBbUIsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTywwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDdkQsT0FBTyxXQUFXLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsT0FBTyxNQUFNLE1BQU0sMkNBQTJDLENBQUM7QUFDL0QsT0FBTyxLQUF3QixNQUFNLFlBQVksQ0FBQztBQUNsRCxPQUFPLEtBQUssTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RCxPQUFPLEtBQUssTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RCxPQUFPLEtBQUssTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RCxPQUFPLFlBQVksTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDOUMsT0FBTyxTQUFTLE1BQU0sOEJBQThCLENBQUM7QUFTckQsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQzNFLFNBQVMsR0FBRyxFQUFFLEdBQ0c7SUFDakIsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxRQUFR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