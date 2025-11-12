"use client";
import {ReactNode, useEffect, useState} from "react";
import {Fetch} from "../types";

interface Props<TResult> {
	data: TResult;
	fetch: Fetch<TResult>;
	delay?: ReloaderDelay;
	children: ReloaderChildren<Data<TResult>>;
}

type Data<T> = T & {syncAt: Date};

export type ReloaderDelay = 5 | 10 | 15 | 20 | 30 | 60;

export type ReloaderChildren<T> = (v: Data<T>) => ReactNode;

export default function <TResult>({data: initData, fetch, delay = 10, children}: Readonly<Props<TResult>>) {
	const [data, setData] = useState<Data<TResult>>({...initData, syncAt: new Date()});

	useEffect(() => {
		onReload(new Date());
	}, [fetch]);

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			switch (delay) {
				case 60:
					if (now.getSeconds() !== 0) return;
					break;
				default:
					if (now.getSeconds() % delay !== 0) return;
			}
			onReload(now);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const onReload = (syncAt: Date) => {
		fetch()
			.then((res) => setData({...res.data, syncAt}))
			.catch((err) => console.error(err));
	};

	return children(data);
}
