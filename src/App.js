import React, {Fragment, useState} from 'react';

import './normalize.css';
import './skeleton.css';

import Formulario from "./componentes/Formulario";
import { calcularTotal } from './helpers';
import Resultado from './componentes/Resultado';
import Mensaje from './componentes/Mensaje';
import Spinner from './componentes/Spinner'

function App() {
  const [total, setTotal] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [plazo, setPlazo] = useState('')
  const [cargando, setCargando] = useState(false)

  let componente;

  const datosPrestamo = (cantidad, plazo) =>{
    const total = calcularTotal(cantidad, plazo);
    setCargando(true);

    setTimeout(() => {
      setTotal(total);
      setCantidad(cantidad);
      setPlazo(plazo);
      setCargando(false);
    }, 3000);
  }

  if (!total && !cargando) {
    componente = <Mensaje />
  } else if (cargando) {
    componente = <Spinner />
  } else {
    componente = 
      <Resultado
        total={total}
        plazo={plazo}
        cantidad={cantidad}
      />
  }

  return (
    <Fragment>
      <h1>Cotizador de Prestamos</h1>
      <div className="container">
        <Formulario 
          datosPrestamo={datosPrestamo}
        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  )
}

export default App;
