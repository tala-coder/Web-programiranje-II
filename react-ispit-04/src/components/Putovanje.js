import React from 'react'
import { useState } from 'react';

const Putovanje = ({naziv, cijena, update, timestamp,   id, deletePredmet  }) => {
    console.log(id );

    const [uredaj, setUredaj] = useState({
      naziv: naziv,
      cijena: cijena  
    });

  const updateItem = (id) => {
    update(uredaj, id)
    setUredaj({  naziv: "", cijena: "" });
  };
    
  return (
    <div className="w3-border w3-blue predmet">
    <p> Naziv: {naziv} </p>
    <p> Cijena: {cijena} </p>
    <p> Timestamp: {timestamp} </p> 
    <p>Cijena:  <input
        type="number"
        name="cijena"
        value={uredaj.cijena}
        onChange={(e) => setUredaj({ ...uredaj, [e.target.name]: e.target.value })}
      /></p>
 
     <button 
        onClick={() => deletePredmet(id)}
    > Kupi(obrisi)
    </button>
    <button onClick={() => updateItem(id)}> uredi </button>
    <button> like </button>
    <button> nisam zainteresovan </button>
</div>
  )
}

export default Putovanje