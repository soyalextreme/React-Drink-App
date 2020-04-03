import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const ModalContext = createContext();

const ModalProvider = props => {
  const [recepyId, setRecepyId] = useState(null);
  const [recepyDetails, setRecepyDetails] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const uri = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recepyId}`;
      const response = await Axios.get(uri);
      setRecepyDetails(response.data.drinks[0]);
    };

    if (!recepyId) {
      // limpiando el state del data
      setRecepyDetails({});
      return;
    }

    fetchApi();
  }, [recepyId]);

  return (
    <ModalContext.Provider
      value={{
        setRecepyId,
        recepyDetails
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
