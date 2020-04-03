import React, { useContext, useState } from "react";

// context
import { CategoryContext } from "../context/CategoryContext";
import { RecepyContext } from "../context/RecepyContext";

const Form = () => {
  //Context
  const { category } = useContext(CategoryContext);
  const { setContextSearch, setFetching } = useContext(RecepyContext);

  // State
  const [search, setSearch] = useState({
    name: "",
    category: ""
  });

  const [error, setError] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setSearch({ ...search, [name]: value });
  };

  return (
    <>
      {error ? (
        <div class="alert alert-primary col-12 text-center" role="alert">
          Ups! Rellena todos los campos
        </div>
      ) : null}
      <form
        className="col-12"
        onSubmit={e => {
          e.preventDefault();

          if (search.name.trim() === "" || search.category.trim() === "") {
            setError(true);
            return;
          }

          setError(false);
          setContextSearch(search);
          setFetching(true);
        }}
      >
        <fieldset className="text-center">
          <legend>Busca bebida por categoria o ingrediente</legend>
        </fieldset>
        <div className="row">
          <div className="col-md-4">
            <input
              name="name"
              className="form-control"
              type="text"
              placeholder="buscar por ingrediente"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control"
              name="category"
              onChange={handleChange}
            >
              <option value="">-- Selecciona una Categoria --</option>
              {category.map(item => (
                <option value={item.strCategory} key={item.strCategory}>
                  {item.strCategory}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <input
              type="submit"
              className="btn btn-block btn-primary"
              value="Buscar Bebidas"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
