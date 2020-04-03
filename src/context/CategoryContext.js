import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
// crear context

export const CategoryContext = createContext();

// Provider donde se encuentran las funciones y el state

const CategoryProvider = props => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategoy = async () => {
      const uri = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const category = await Axios.get(uri);
      setCategory(category.data.drinks);
    };

    fetchCategoy();
  }, []);

  return (
    <CategoryContext.Provider value={{ category }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
