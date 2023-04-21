// import React from "react";
import Item from "./Item";
import React, { useState } from 'react';

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // filter the items based on the selected category
  const filteredItems = selectedCategory === ''
    ? items
    : items.filter((item) => item.category === selectedCategory);
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
