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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvZWRpdG9yL3RpcHRhcC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFDYixPQUFjLEVBQUMsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxhQUFhLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBUyxLQUFLLEVBQW1CLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ3ZELE9BQU8sV0FBVyxNQUFNLHlCQUF5QixDQUFDO0FBRWxELE9BQU8sTUFBTSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9ELE9BQU8sS0FBd0IsTUFBTSxZQUFZLENBQUM7QUFDbEQsT0FBTyxLQUFLLE1BQU0sb0NBQW9DLENBQUM7QUFDdkQsT0FBTyxLQUFLLE1BQU0sb0NBQW9DLENBQUM7QUFDdkQsT0FBTyxLQUFLLE1BQU0sb0NBQW9DLENBQUM7QUFDdkQsT0FBTyxZQUFZLE1BQU0sK0NBQStDLENBQUM7QUFDekUsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzlDLE9BQU8sU0FBUyxNQUFNLDhCQUE4QixDQUFDO0FBU3JELE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFDeEIsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUMzRSxTQUFTLEdBQUcsRUFBRSxHQUNHO0lBQ2pCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxF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