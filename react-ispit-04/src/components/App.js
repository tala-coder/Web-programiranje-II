import '../App.css';
import { doc, getDoc, getDocs, collection, deleteDoc, getFirestore, updateDoc, addDoc } from "firebase/firestore";
import { app } from "../index"
import { useState, useEffect } from 'react';
import Putovanja from './Putovanja'
import PutovanjaCheckbox from './PutovanjaCheckbox'
import DodajUredaj from './DodajUredaj';

function App() {
  const [db, setDb] = useState(getFirestore(app))
  const [putovanja, setPutovanja] = useState([])
  const [checked, setChecked] = useState({ mobitel: false, frizider: false, sat: false })

  const handleCheck = (e, type) => {
    let checkedAfter = { ...checked }
    checkedAfter[type] = !checkedAfter[type];
    setChecked(checkedAfter);
  }

  const ucitaj = async () => {
    const querySnapshot = await getDocs(collection(db, 'uredaji2'));
    const getCars = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPutovanja(getCars);
    // setPutovanja([...getCars]);
    console.log(getCars);
  }

  useEffect(() => {
    ucitaj();
  }, [])

  const deletePredmet = async (id) => {
    try {
      console.log(id);
      await setPutovanja(putovanja.filter((p) => id !== p.id));
      await deleteDoc(doc(db, 'uredaji2', id))
    } catch (error) {
      console.log(error);
    }
  }

  let DUMMY = [
    {
      naziv: 'ajfon 5',
      mobitel: true,
      tablet: false,
      sat: false,
    },
    {
      naziv: 'ajfon 6',
      mobitel: true,
      tablet: false,
      sat: false,
    },
    {
      naziv: 'ajfon 8',
      mobitel: true,
      tablet: false,
      sat: false,
    }
  ]

  const update = async (uredaj, id) => {
    const washingtonRef = doc(db, 'uredaji2', id);
    setPutovanja(putovanja.map((uredaj) => uredaj.id === id ? { ...uredaj, cijena: uredaj.cijena } : uredaj));
    await updateDoc(washingtonRef, uredaj);
  }

  //   const  = async (id) => {
  //     try {
  //         await deleteDoc(doc(db, "predmeti", id));
  //         console.log("successfully deleted with id " + id)
  //         ucitaj();
  //     } catch (err) {
  //         console.error(err);
  //     }
  // }


  const dodajUbazu = async (noviUredaj) => {
    try {
      setPutovanja([...putovanja, noviUredaj])
      await addDoc(collection(db, "uredaji2"), noviUredaj);
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    alert('// Deleting collections from a Web client is not recommended.')
};
 
  // Deleting collections from a Web client is not recommended.

  return (
    <div className="App">
      <h4>Muhammed Talić, IT, GRUPA-B, 5/25/2022 </h4>
      <PutovanjaCheckbox handleCheck={handleCheck} />
      <Putovanja predmeti={putovanja} checked={checked} updateItem={update} deletePredmet={deletePredmet}  > </Putovanja>
      <DodajUredaj addUredaj={dodajUbazu} /> 
       <button onClick={handleClick}>DELETE ALLL</button>
    </div>
  );
}

export default App;
