"use client";

import { useState } from "react";

export default function ConversionInput({ menuOption }: { menuOption: string }) {
	let units: Record<string, string[]> = {
		length: ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile"],
		weight: ["milligram", "gram", "kilogram", "ounce", "pound"],
		temperature: ["Celcius", "Farenh,eit", "Kelvin"],
	};

	const [converted, setConverted] = useState(false);

	return (
		<div className="flex flex-col items-center">
			<div className="font-bold">Enter the {menuOption} to convert</div>
			<input type="text" className="bg-zinc-600" />
			<div>Unit to convert from</div>
			<div>Unit to convert to</div>
			<button className="bg-green-400 text-black p-2 rounded hover:bg-green-200">Convert</button>
		</div>
	);
}
