import React, { useState, useEffect } from "react";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCatogories = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        const data = await response.json();

        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCatogories();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul className="flex">
        {/* Render the list of fetched categories */}
        {categories.map((category) => (
          <li className="mr-4" key={category}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
