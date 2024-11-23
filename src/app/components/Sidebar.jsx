import React, { useEffect, useState } from "react";
import { XMarkIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function Sidebar({ openSidebar, setOpenSidebar }) {
  const [categories, setCategories] = useState(null);
  const [activeCategories, setActiveCategories] = useState([]); // expanded categories IDs


  const toggleCategory = (id) => {
    setActiveCategories((prevState) =>
      prevState.includes(id)
        ? prevState.filter((activeId) => activeId !== id) 
        : [...prevState, id] 
    );
  };

  const renderCategories = (categories) => {
    return (
      <ul className="space-y-2 pl-2">
        {categories.map((category) => (
          <li key={category.id} className="cursor-pointer text-sm py-1 text-white">
            <div
              className="flex items-center justify-between"
              onClick={() => toggleCategory(category.id)} // Toggle on click
            >
              <span>{category.title}</span>
              {category.childrens && (
                <PlusIcon
                  className={`h-3 w-3 text-white transition-transform ${
                    activeCategories.includes(category.id) ? "rotate-45" : "rotate-0"
                  }`}
                />
              )}
            </div>
            {category.childrens && activeCategories.includes(category.id) && (
              <div className="pl-4">{renderCategories(category.childrens)}</div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  // Fetch categories 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.shope.com.bd/api/v1/public/hero-categories"
        );
        const json = await res.json();
        setCategories(json);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className={`bg-black/40 fixed top-0 left-0 w-full h-full z-20 duration-300 ${
        openSidebar
          ? "translate-x-0 opacity-100"
          : "opacity-0 translate-x-[-100%]"
      }`}
    >
      <div
        className={`absolute h-full bg-primary min-w-72 top-0 left-0 max-h-screen overflow-y-scroll duration-300 ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <section className="border-b flex justify-between items-center p-4">
          <p className="text-2xl text-white font-thin">Menu</p>
          <XMarkIcon
            className="h-6 w-6 text-white cursor-pointer"
            onClick={() => setOpenSidebar(false)}
          />
        </section>

        {/* Render category list */}
        <div className="p-4">
          {categories && renderCategories(categories)}
        </div>
      </div>
    </section>
  );
}
