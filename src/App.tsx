import React from 'react';

import { ButtonCounter } from "./components/ButtonCounter";
import "./style.scss";

export const App = () => {
	return (
		<div className="p-2">
			<h1>react tsx</h1>
			<ButtonCounter name="Some Title" />
		</div>
	);
};
