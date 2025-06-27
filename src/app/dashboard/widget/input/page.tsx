"use client";
import React, {useState} from "react";
import {NextPageProps, Nullable} from "nextjs-tools";
import {
	Button,
	fnInput,
	InputBetween,
	InputCheckbox,
	InputDate,
	InputDateMonth,
	InputDatePeriod,
	InputDropdown,
	InputLabel,
	InputString,
	InputTextarea,
	Panel,
} from "@app/index";
import ImgAuth from "web-asset/svg/regular/fi-rr-circle-user.svg";
import ImgFruit from "web-asset/svg/regular/fi-rr-kiwi-fruit.svg";
import ImgDate from "web-asset/svg/regular/fi-rr-calendar.svg";
import {InputDatePeriodValue} from "@app/v1/form/input-date-period";
import {InputBetweenValue} from "@app/v1/form/input-between";
import ImgMoney from "web-asset/svg/regular/fi-rr-money-bill-transfer.svg";

export default function ({}: NextPageProps) {
	const [date, setDate] = useState<Nullable<Date>>();
	const [period, setPeriod] = useState<InputDatePeriodValue>({});
	const [between, setBetween] = useState<InputBetweenValue>({});
	const [month, setMonth] = useState(new Date());

	return (
		<>
			<Panel>
				<h4 className="mb-4">Input</h4>
				<InputString
					label="input"
					placeholder="text"
				/>
				<InputString
					imgSrc={ImgAuth}
					placeholder="img text"
				/>

				<InputString
					imgSrc={ImgAuth}
					placeholder="img text">
					<Button>Confirm</Button>
				</InputString>

				<InputLabel label="input style label">Hello</InputLabel>

				<InputTextarea
					label="textarea"
					resize
				/>

				<p>Checkbox</p>
				<InputCheckbox className="mb-4">Checkbox</InputCheckbox>

				<p>Dropdown</p>
				<div className="grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4">
					<InputDropdown
						textAlign="text-left"
						className="mb-4"
						items={[{value: "apple"}, {value: "banana"}, {value: "citron"}]}
					/>
					<InputDropdown
						imgSrc={ImgFruit}
						items={[{value: "apple"}, {value: "banana"}, {value: "citron"}]}
					/>
				</div>

				<p>Date</p>
				<InputDate
					imgSrc={ImgDate}
					value={date}
					onChange={setDate}
				/>

				<InputDate
					label="hidden init button"
					imgSrc={ImgDate}
					value={date}
					onChange={setDate}
					hiddenInitButton
				/>

				<p>Period</p>
				<InputDatePeriod
					value={period}
					onChange={setPeriod}
					imgSrc={ImgDate}
				/>

				<InputBetween
					imgSrc={ImgMoney}
					label="Input between"
					value={between}
					onChange={setBetween}
					inputParser={fnInput.onChangeNumber}
				/>

				<InputDateMonth
					imgSrc={ImgMoney}
					label="Month"
					value={month}
					onChange={setMonth}
				/>
			</Panel>
		</>
	);
}
