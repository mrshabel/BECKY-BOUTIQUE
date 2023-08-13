export default function FilterBadge({ item }) {
  return (
    <button className="w-fit px-4 py-1 flex items-center rounded-2xl bg-gray-300 hover:bg-gray-900 hover:text-gray-100 ease-in duration-200 text-gray-700 cursor-pointer">
      <span className="uppercase tracking-wide font-medium text-[11px] lg:text-[14px] ">
        {item}
      </span>
    </button>
  );
}
