"use client";
import { createElement as _createElement } from "react";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { fnCss } from "nextjs-tools";
import fnInput from "../../../fn/input";
import ModalAlert from "../../modal/alert";
import Button from "../../widget/button";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdjEvZWRpdG9yL3RpcHRhcC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7QUFDYixPQUFjLEVBQUMsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ3RDLE9BQU8sRUFBQyxhQUFhLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBUyxLQUFLLEVBQW1CLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sVUFBNkIsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLE1BQU0sTUFBTSxxQkFBcUIsQ0FBQztBQUN6QyxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLE1BQU0sTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRCxPQUFPLEtBQXdCLE1BQU0sWUFBWSxDQUFDO0FBQ2xELE9BQU8sS0FBSyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZELE9BQU8sS0FBSyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZELE9BQU8sS0FBSyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZELE9BQU8sWUFBWSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLFNBQVMsTUFBTSw4QkFBOEIsQ0FBQztBQVNyRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFDM0UsU0FBUyxHQUFHLEVBQUUsR0FDRztJQUNqQixNQUFNLENBQUMsS0FBSyxFQUFFLFFB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