"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    //CHANGE THE URL
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", filter);

    //NAVIGATE TO THIS URL
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button filter="all" handleFilter={handleFilter} activeFilter={activeFilter}>
        All cabins
      </Button>
      <Button filter="small" handleFilter={handleFilter} activeFilter={activeFilter}>
        1&mdash;3 quests
      </Button>
      <Button filter="medium" handleFilter={handleFilter} activeFilter={activeFilter}>
        4&mdash;7 quests 8&mdash;12 quests
      </Button>
      <Button filter="large" handleFilter={handleFilter} activeFilter={activeFilter}>
        8&mdash;12 quests
      </Button>
    </div>
  );
}

function Button({ children, filter, handleFilter, activeFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;
