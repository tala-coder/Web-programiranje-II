import '../App.css';
import { getFirestore, arrayUnion, serverTimestamp, collection, getDocs, setDoc, deleteField, deleteDoc, addDoc, doc, updateDoc } from 'firebase/firestore/lite';
import { app } from "../index"
import { useEffect, useState } from 'react';
import Cars from './Cars'
import DodajAuto from './DodajAuto'


function App() {
  const [db, setDb] = useState(getFirestore(app))
  const [cars, setCars] = useState([])
  const [ucitano, setUcitano] = useState(false)

  const ucitaj = async () => {
    const querySnapshot = await getDocs(collection(db, 'cars'));
    setUcitano(true);
    const getCars = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setCars(getCars);
    console.log(getCars);
  }

  const obrisiAuto = async (id) => {
    try {
      console.log(id);
      setCars(cars.filter((cars) => id !== cars.id));
      // await deleteDoc(doc(db, 'cars', id))
    } catch (error) {
      console.log(error);
    }
  }

  const dodajUbazu = async (novoAuto) => {
    try {
      setCars([...cars, novoAuto])
      await addDoc(collection(db, "cars"), novoAuto);
    } catch (error) {
      console.log(error);
    }
  }

  const update = async (auto, id) => {
    try {
      const washingtonRef = doc(db, "cars", id);
      setCars(cars.map((car) => car.id === id ? { ...auto, tip: auto.tip } : car));
      await updateDoc(washingtonRef, auto);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    ucitaj();
  }, [])

  return (
    <div className="App">
      {ucitano &&
        <div>
          <h1>VOZILA {cars.length}</h1>
          <div className="App">  
            <Cars cars={cars} deleteItem={obrisiAuto} updateItem={update} />
            {cars.length === 0 ? <DodajAuto addCar={dodajUbazu} /> : ''}
            <DodajAuto addCar={dodajUbazu} />
          </div>
        </div>}

      {!ucitano &&
        <div>
          <h1> loading</h1>
        </div>}
    </div>
  );

}

export default App;