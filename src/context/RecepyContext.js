import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const RecepyContext = createContext();

const RecepyProvider = props => {
  const [recepy, setRecepy] = useState([]);
  const [contextSearch, setContextSearch] = useState({
    name: "",
    category: ""
  });
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const { name, category } = contextSearch;
      const uri = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
      const response = await Axios.get(uri);
      setRecepy(response.data.drinks);
    };

    if (fetching) {
      fetchApi();
    }
  }, [contextSearch, fetching]);

  return (
    <>
      <RecepyContext.Provider value={{ recepy, setContextSearch, setFetching }}>
        {props.children}
      </RecepyContext.Provider>
    </>
  );
};

export default RecepyProvider;
