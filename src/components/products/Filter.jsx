import FilterBadge from "./FilterBadge";

export default function Filter() {
  const filterItems = [
    "TOPS",
    "DRESSES",
    "BOTTOMS",
    "OUTERWEAR",
    "SHOES",
    "ACCESSORIES",
    "PETITE",
    "PLUS SIZE",
    "NEW ARRIVALS",
    "SALE",
  ];

  return (
    <div className="">
      <ul className="flex flex-wrap gap-3 justify-center">
        {filterItems.map((item, index) => (
          <li className="" key={index}>
            <FilterBadge item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
