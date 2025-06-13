import React from "react";
declare const fnInput: {
    onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>) => string;
};
export type InputParser = (e: React.ChangeEvent<HTMLInputElement>) => string;
export default fnInput;
