import React, { useState } from 'react';

function Formulario({ datosPrestamo }) {
  const [cantidad, setCantidad] = useState('');
  const [plazo, setPlazo] = useState('');

  const calcularPrestamo = e => {
    e.preventDefault();
    datosPrestamo(cantidad, plazo);
  }

  const actualizarState = e => {
    const {name, value} = e.target;

    name === 'cantidad'
    ? setCantidad(Number(value))
    : setPlazo(Number(value));
  }

  const habilitarSubmit = () => {
    const noValido = !cantidad || !plazo;
    return noValido;
  }

  return (
    <form onSubmit={calcularPrestamo}>
      <div>
        <label>Cantidad Prestamo:</label>
        <input
          type="number"
          name="cantidad"
          className="u-full-width"
          placeholder="ejemplo: 3000"
          onChange={actualizarState}
        />
      </div>
      <div>
        <label>Plazo a pagar</label>
        <select
          name="plazo"
          className="u-full-width"
          onChange={actualizarState}
        >
          <option value="">Seleccionar</option>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
      <div>
        <input 
          type="submit"
          value="calcular"
          className="u-full-width button-primary"
          disabled={habilitarSubmit()}
        />
      </div>
    </form>
  );
}
 
export default Formulario;