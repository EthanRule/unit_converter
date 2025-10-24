import Link from "next/link";

export default function BaseMenu({ menuOption }: { menuOption: string }) {
  return (
    <div className="flex justify-center py-4">
      <div className="flex border px-20 w-2/5 items-center rounded-2xl flex-col py-4">
        <div className="font-bold text-3xl">Unit Converter</div>
        <div className="font-bold flex-row text-xl py-4 flex gap-4">
          <Link
            href="length"
            className={`px-4 rounded hover:bg-zinc-600 ${
              menuOption === "length" ? "bg-zinc-600" : "bg-zinc-800"
            }`}
          >
            Length
          </Link>
          <Link
            href="weight"
            className={`px-4 rounded hover:bg-zinc-600 ${
              menuOption === "weight" ? "bg-zinc-600" : "bg-zinc-800"
            }`}
          >
            Weight
          </Link>
          <Link
            href="temperature"
            className={`px-4 rounded hover:bg-zinc-600 ${
              menuOption === "temperature" ? "bg-zinc-600" : "bg-zinc-800"
            }`}
          >
            Temperature
          </Link>
        </div>
      </div>
    </div>
  );
}
