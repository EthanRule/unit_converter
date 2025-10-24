import BaseMenu from "../components/baseMenu";
import ConversionInput from "../components/ConversionInput";
export default function Page() {
	return (
		<div>
			<BaseMenu menuOption="weight" />
			<ConversionInput menuOption="weight" />
		</div>
	);
}
