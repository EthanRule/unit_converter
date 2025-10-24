export async function POST(request: Request) {
	const { value, fromUnit, toUnit, type } = await request.json();

	let res = 0;

	let lengthFactor: Record<string, number> = {
		millimeter: 1,
		centimeter: 10,
		meter: 1000,
		kilometer: 1_000_000,
		inch: 25.4,
		foot: 304.8,
		yard: 914.4,
		mile: 1_609_344,
	};

	let weightFactor: Record<string, number> = {
		milligram: 1,
		gram: 1000,
		kilogram: 1000000,
		ounce: 28349.5,
		pound: 453592,
	};

	switch (type) {
		case "length":
			res = (value * lengthFactor[fromUnit]) / lengthFactor[toUnit];
			break;
		case "weight":
			res = (value * weightFactor[fromUnit]) / weightFactor[toUnit];
			break;
		case "temperature":
			let base: number = 0;
			console.log(`fromUnit: ${fromUnit}`);

			switch (
				fromUnit // Convert everything to kelvin
			) {
				case "farenheit":
					base = ((value - 32) * 5) / 9 + 273.15;
					break;
				case "celcius":
					base = value + 273.15;
					break;
				case "kelvin":
					base = value;
					break;
			}

			switch (
				toUnit // Convert everything to toUnit
			) {
				case "farenheit":
					res = ((base - 273.15) * 9) / 5 + 32;
					break;
				case "celcius":
					res = base - 273.15;
					break;
				case "kelvin":
					res = base;
					break;
			}

			break;
	}

	return Response.json({ result: res });
}
