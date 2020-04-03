import React, { useContext } from "react";

import { RecepyContext } from "../context/RecepyContext";
import RecepyCard from "./RecepyCard";

const RecepyList = () => {
  const { recepy } = useContext(RecepyContext);

  return (
    <>
      <div className="row mt-5">
        {recepy.map(item => (
          <RecepyCard key={item.idDrink} recepy={item} />
        ))}
      </div>
    </>
  );
};

export default RecepyList;
