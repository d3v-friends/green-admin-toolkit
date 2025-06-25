import React from "react";

const fnInput = {
	onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>): string => {
		let numericValue = e.target.value
			.replace(/[^0-9.]/g, "")
			// 소수점이 여러 개 있을 경우 첫 번째 것만 유지
			.replace(/(\..*)\./g, "$1");

		// 입력값이 소수점으로 시작하면 앞에 0 추가
		if (numericValue.startsWith(".")) {
			numericValue = "0" + numericValue;
		}

		// 맨 앞의 불필요한 0 제거 (0이 여러 개 있을 경우)
		// 단, 0 뒤에 소수점이 오는 경우는 유지 (예: 0.123)
		return numericValue.replace(/^0+(?=\d)/, "");
	},
	getImage: (maxSizeMb = 5): Promise<string> => {
		return new Promise((resolve, reject) => {
			const input = document.createElement("input");
			input.setAttribute("hidden", "true");
			input.setAttribute("type", "file");
			input.setAttribute("accept", "image/*");
			input.setAttribute("multiple", "false");
			input.onchange = () => {
				if (input.files == null) return;
				if (input.files.length === 0) return;
				if (1024 * 1024 * maxSizeMb < input.files[0].size) {
					reject("over_max_size");
					return;
				}

				const reader = new FileReader();
				reader.onload = () => {
					resolve(reader.result as string);
					input.remove();
				};
				reader.onerror = (error) => reject(JSON.stringify(error));
				reader.readAsDataURL(input.files[0]);
			};

			input.click();
		});
	},
};

export type InputParser = (e: React.ChangeEvent<HTMLInputElement>) => string;

export default fnInput;
