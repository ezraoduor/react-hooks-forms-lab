import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value); // Update search term
  }

  const itemsToDisplay = items.filter((item) => {
    // 1. Filter by category
    const matchesCategory = 
      selectedCategory === "All" || item.category === selectedCategory;
    
    // 2. Filter by search term (case-insensitive partial match)
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        search={searchTerm}         // Pass search term to Filter
        onSearchChange={handleSearchChange} // Pass search handler
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;