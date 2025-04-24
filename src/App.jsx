import { useState } from 'react';
import { productos } from './productos';
import './App.css';

export default function App() {
  const [carrito, setCarrito] = useState([]); // Carrito inicial vacío

  function agregar(evento, producto) {
    console.log(evento);
    const productoNuevo = { ...producto, createdAt: Date.now() };
    setCarrito([...carrito, productoNuevo]);
  }

  function eliminar(evento, producto) {
    setCarrito([...carrito.filter(p => p.createdAt !== producto.createdAt)]);
  }

  return (
      <main>
        <section id="catalogo">
          <h1><i>{'{desafío} store_'}</i></h1>
          <ul>
            {productos.map(
              producto => <li key={producto.createdAt}>
                <h3>{producto.nombre}</h3>
                <p>Precio: <b>${producto.precio.toFixed(2)}</b></p>
                <button onClick={e => agregar(e, producto)}>Agregar al carrito</button>
              </li>
            )}
          </ul>
        </section>
        <aside id="carrito">
          <h2>Carrito</h2>
          <button className="btnRojo" onClick={() => setCarrito([])}>Vaciar</button>
          <ul>
            {carrito.map(seleccionado => <li key={seleccionado.createdAt}>
              <h3>{seleccionado.nombre}</h3>
              <p>(${seleccionado.precio})</p>
              <button
                className="btnRojo"
                onClick={e => eliminar(e, seleccionado)}
              >
                X
              </button>
            </li>
          
            )}
          </ul>
          <b>
            Total: ${
              carrito.reduce(
                (subtotal, producto) => subtotal + producto.precio, 0
            )}
          </b>
        </aside>
      </main>
  )
}
