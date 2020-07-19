import React from 'react';

const Resultado = ({ cantidad, plazo, total }) => (
  <div className="u-full-width result">
    <h2>Resultado</h2>
    <p>La cantidad solicitada fue: ${cantidad}</p>
    <p>A pagar en: {plazo} meses</p>
    <p>Total a pagar: ${total}</p>
    <p>Su pago mensual es de ${(total/plazo).toFixed(2)}</p>
  </div>
)
 
export default Resultado;