import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Category() {
  const [categories, setCategories] = useState(null);
  const [activeCategories, setActiveCategories] = useState([]); // active categories

  const handleSubcategoryClick = (childrens, level) => {
    if (!childrens) return;

    // active categories at different levels
    const updatedActiveCategories = [...activeCategories];
    updatedActiveCategories[level] = childrens;

    // Remove deeper levels
    setActiveCategories(updatedActiveCategories.slice(0, level + 1));
  };

  const handleLeave = () => {
    setActiveCategories([])
  };

  const renderCategories = (categories, level = 0) => {
    return (
      <ul key={Math.random()} className="min-w-64 space-y-1.5 bg-white p-4">
        {categories.map((category) => (
          <li
            key={Math.random()}
            className="text-customBlack hover:text-primary cursor-pointer capitalize text-sm flex items-center justify-between group "
            onMouseEnter={() => handleSubcategoryClick(category.childrens, level)}
          >
            {category.title}
            {category.childrens && (
              <ChevronRightIcon className="h-3 w-3 text-customBlack group-hover:text-primary" />
            )}
          </li>
        ))}
      </ul>
    );
  };


  
  // fetching categories 
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.shope.com.bd/api/v1/public/hero-categories"
      );
      const json = await res.json();
      setCategories(json);
    };

    fetchData();
  }, []);

  return (
    <div className="flex divide-x-2 z-10" onMouseLeave={handleLeave}>
      {/* Render category */}
      {categories && renderCategories(categories, 0)}

      {/* Render subcategories */}
      {activeCategories.map((subcategory, index) =>
        renderCategories(subcategory, index + 1)
      )}
    </div>
  );
}
