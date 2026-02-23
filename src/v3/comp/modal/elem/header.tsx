import {ReactNode} from "react";
import {fnCss, FnVoid} from "nextjs-tools";
import ImgCross from "web-asset/svg/regular/fi-rr-cross.svg";
import Image from "next/image";

interface Props {
	children?: ReactNode;
	className?: string;
	onClose?: FnVoid;
}

export default function ({children, className = "", onClose}: Readonly<Props>) {
	return (
		<div className={fnCss.sum(className, "p-2 lg:pl-4 lg:pr-4", "flex border-bottom text-lg")}>
			{children}
			{onClose && (
				<div className="grow text-right">
					<button
						className="ml-2 no-drag"
						onClick={() => onClose()}>
						<Image
							className="filter-(--text-1-filter) w-[1rem] hover:filter-(--primary-filter)"
							src={ImgCross}
							alt="close"
							width={20}
							height={20}
						/>
					</button>
				</div>
			)}
		</div>
	);
}
