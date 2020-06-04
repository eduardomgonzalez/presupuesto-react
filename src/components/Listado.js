import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listados</h2>
      {gastos.map((gasto) => {
        return <Gasto key={gasto.id} gasto={gasto} />;
      })}
    </div>
  );
};

// Documentación con PropTypes
Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
