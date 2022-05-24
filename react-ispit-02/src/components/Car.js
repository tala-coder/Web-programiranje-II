//  import { getFirestore } from 'firebase/firestore/lite'; 
//  import {app} from "../index"
import { useState } from 'react';
import '../App.css';
import Form from './Form';

const Car = ({ id, naziv, tip, boja, dodatna_oprema, kolicina, update, deleteItem }) => {
  const [auto, setAuto] = useState({
    boja: boja,
    dodatna_oprema: dodatna_oprema,
    kolicina: kolicina,
    naziv: naziv,
    tip: tip,
  });

  const updateItem = (id) => { 
    update(auto, id)
    setAuto({ boja: "", dodatna_oprema: "", kolicina: "", naziv: "", tip: "" });
};

  return (
    <div className='item1'>
      <h3> {naziv} </h3>
      <p>tip:  <input
        type="text"
        name="tip"
        value={auto.tip}
        onChange={(e) => setAuto({ ...auto, [e.target.name]: e.target.value })}
      /></p>
      <p>boja: <input
        type="text"
        name="boja"
        value={auto.boja}
        onChange={(e) => setAuto({ ...auto, [e.target.name]: e.target.value })}
      /> </p>
      <p>dodatna oprema:<input
        type="text"
        name="dodatna_oprema"
        value={auto.dodatna_oprema}
        onChange={(e) => setAuto({ ...auto, [e.target.name]: e.target.value })}
      /> </p>
      <p>kolicina:  <input
        type="number"
        name="kolicina"
        value={auto.kolicina}
        onChange={(e) => setAuto({ ...auto, [e.target.name]: e.target.value })}
      /></p>
      <button onClick={() => deleteItem(id)}> obrisi </button>
      <button onClick={() => updateItem(id)}> uredi </button>
    </div>

  )
}

export default Car