import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState("");

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    actualizarTabla();
  });

  function actualizarTabla() {
    fetch("http://localhost:4000/invoice")
      .then(res => res.json())
      .then(
        (result) => {
         //console.log(result);
         /*const listItems = result.map((row) =>
                            <tr key={row.Id}>
                              <td>{row.total}</td>
                              <td>{row.currency}</td>
                              <td>{row.invoice_date}</td>
                              <td>{row.due_date}</td>
                              <td>{row.vendor_name}</td>
                              <td>{row.remittance_address}</td>
                              <td><button type="button" onClick={() => handleClick(row.Id)}>Actualizar</button></td>
                            </tr>
                      );*/
        const listItems = result.map(function(row, key){
                        //console.log(item.total);
                        if(row.estado == 'PENDIENTE') {
                           return (<tr key={row.Id}>
                                    <td>{row.total}</td>
                                    <td>{row.currency}</td>
                                    <td>{row.invoice_date}</td>
                                    <td>{row.due_date}</td>
                                    <td>{row.vendor_name}</td>
                                    <td>{row.remittance_address}</td>
                                    <td><button type="button" onClick={() => handleClick(row.Id)}>Actualizar</button></td>
                                  </tr>);
                        }
                      })
          setCount(listItems);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  function handleClick(e) {
    //e.preventDefault();
    //console.log('The link was clicked: '+e);
    //actualizarTabla();
    fetch('http://localhost:4000/Invoice/'+e, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }).then((response) => response.json())
          .then((responseJson) => {
            if(responseJson['status'] != 'APROBADA'){
              alert("No se pudo ejecutar esta acción");
              return;
            }else {
              //aquí llamo a la tabla
              actualizarTabla();
            }
          })
          .catch((error) => {
            console.log(error);
          });
  }

  return (
    <div>
      <header>
        <img src="https://tech-start.com/wp-content/uploads/2019/07/TechStart-Logo-White.png"></img>
      </header>
      <div className="container">
        <h1 className="titulo">FACTURAS PENDIENTES</h1>
        <table>
        <thead>
          <tr>
            <th>Número de factura</th>
            <th>Nombre del proveedor</th>
            <th>Dirección del proveedor</th>
            <th>Total de la factura</th>
            <th>Fecha de la factura</th>
            <th>Fecha de vencimiento</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Bill Gates</td>
            <td>asdasdasd</td>
            <td>55577855</td>
            <td>55577854</td>
            <td>55577855</td>
            <td>55577854</td>
            <td><button type="button" onClick={() => setCount(count + 1)}>Aumentar</button></td>
          </tr>
          <tr>
            <td>Bill Gates</td>
            <td>55577854</td>
            <td>55577855</td>
            <td>55577854</td>
            <td>55577855</td>
            <td>55577854</td>
            <td><button type="button" onClick={handleClick}>Seleccionar</button></td>
          </tr> */}
          {count}
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
