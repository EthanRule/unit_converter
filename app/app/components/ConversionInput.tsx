"use client";

import { useState } from "react";

export default function ConversionInput({ menuOption }: { menuOption: string }) {
	const [converted, setConverted] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [fromUnit, setFromUnit] = useState("");
	const [toUnit, setToUnit] = useState("");
	const [result, setResult] = useState("");

	const handleConvert = async () => {
		if (!inputValue || !fromUnit || !toUnit) return;

		try {
			const response = await fetch("/api/convert", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					value: parseFloat(inputValue),
					fromUnit,
					toUnit,
					type: menuOption,
				}),
			});
			const data = await response.json();
			setResult(data.result);
		} catch (error) {
			setResult("Error converting");
		}
	};

	let units: Record<string, string[]> = {
		length: ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile"],
		weight: ["milligram", "gram", "kilogram", "ounce", "pound"],
		temperature: ["celcius", "farenheit", "kelvin"],
	};

	return (
		<div className="flex flex-col items-center">
			<div className="font-bold">Enter the {menuOption} to convert</div>
			<input
				type="number"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className="bg-zinc-600"
			/>
			<div className="flex flex-row">
				<div className="px-4 font-bold">Unit to convert from</div>
				<select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
					<option value="">Select unit</option>
					{units[menuOption]?.map((unit) => (
						<option key={unit} value={unit}>
							{unit}
						</option>
					))}
				</select>
			</div>
			<div className="flex flex-row">
				<div className="px-4 font-bold">Unit to convert to</div>
				<select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
					<option value="">Select unit</option>
					{units[menuOption]?.map((unit) => (
						<option key={unit} value={unit}>
							{unit}
						</option>
					))}
				</select>
			</div>
			<button onClick={handleConvert} className="bg-green-400 text-black p-2 rounded hover:bg-green-200 mt-4">
				Convert
			</button>
			{result && <div className="mt-4 font-bold">Result: {result}</div>}
		</div>
	);
}
