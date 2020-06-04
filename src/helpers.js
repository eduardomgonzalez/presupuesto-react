export const revisarPresupuesto = (presupuesto, restante) => {
  // 75% de dinero disponible (verde), a la mitad (amarillo), menos a 25% (rojo)
  let clase;

  if (presupuesto / 4 > restante) {
    clase = "alert alert-danger";
  } else if (presupuesto / 2 > restante) {
    clase = "alert alert-warning";
  } else {
    clase = "alert alert-success";
  }

  return clase;
};
