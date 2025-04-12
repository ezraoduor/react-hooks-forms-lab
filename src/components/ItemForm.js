import { useState } from 'react';

const ItemForm = ({ onItemFormSubmit }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a unique ID for the item (for testing purposes, we'll use Date.now())
    const newItem = {
      id: Date.now().toString(),  // Unique ID
      name,
      category,
    };

    // Call the onItemFormSubmit callback with the new item
    if (onItemFormSubmit) {
      onItemFormSubmit(newItem);
    }

    // Optionally add the new item to the local state (if you need to display it)
    setItems([...items, newItem]);

    // Clear the form
    setName('');
    setCategory('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Name"
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Category"
          />
        </label>
        <button type="submit">Add to List</button>
      </form>

      {/* Optionally render the list of items */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemForm;
