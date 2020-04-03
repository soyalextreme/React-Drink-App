import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const RecepyCard = ({ recepy }) => {
  const { setRecepyId, recepyDetails } = useContext(ModalContext);

  const showIngridients = details => {
    let ingridients = [];

    for (let i = 1; i < 16; i++) {
      if (details[`strIngredient${i}`]) {
        ingridients.push(
          <li key={i}>
            {details[`strIngredient${i}`]} ---- {details[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingridients;
  };

  //Moadal State
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const styleClass = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card">
          <h2 className="card-header">{recepy.strDrink}</h2>
          <img
            className="card-img-top"
            src={recepy.strDrinkThumb}
            alt={`Imagen de ${recepy.strDrink}`}
          />
          <div className="card-body">
            <button
              type="button"
              className="btn btn-block btn-primary"
              onClick={() => {
                setRecepyId(recepy.idDrink);
                handleOpen();
              }}
            >
              Ver Receta
            </button>

            <Modal
              open={open}
              onClose={() => {
                handleClose();
                setRecepyId(null);
              }}
            >
              <div
                style={{ ...modalStyle, textAlign: "center" }}
                className={styleClass.paper}
              >
                <h2>{recepyDetails.strDrink}</h2>
                <h3 className="mt-4">Instrucciones</h3>
                <p>{recepyDetails.strInstructions}</p>
                <img
                  className="img-fluid my-4"
                  src={recepyDetails.strDrinkThumb}
                  alt={`Imagen de ${recepyDetails.strDrink}`}
                  style={{ width: "50%", display: "block", margin: "auto" }}
                />
                <h3>Ingredientes</h3>
                {showIngridients(recepyDetails)}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

RecepyCard.propTypes = {
  recepy: PropTypes.object.isRequired
};

export default RecepyCard;
