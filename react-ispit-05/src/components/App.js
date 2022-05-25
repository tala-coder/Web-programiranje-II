import '../App.css';
import { doc, getDoc, getDocs, collection, getFirestore } from "firebase/firestore";
import { app } from "../index"
import { useState, useEffect } from 'react';
import Putovanja from './Putovanja'

function App() {
  const [db, setDb] = useState(getFirestore(app))
  const [putovanja, setPutovanja] = useState([])

  const ucitaj = async () => {
    const querySnapshot = await getDocs(collection(db, 'putovanja')); 
    const getCars = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPutovanja(getCars);
    console.log(getCars);
  }
  
  useEffect(() => { 
    ucitaj() ;
  }, [])
  


  return (
    <div className="App">
      ispit 5
      <Putovanja putovanja={putovanja}> </Putovanja>
       
    </div>
  );
}

export default App;