import React from "react";
import {Panel, PanelHeader, ValueObjectId} from "../../../../src";

export default function () {
	return (
		<Panel>
			<PanelHeader>Value</PanelHeader>
			<ValueObjectId
				align="left"
				copyable>
				ABCDEFG
			</ValueObjectId>
		</Panel>
	);
}
