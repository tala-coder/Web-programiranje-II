import '../App.css';
import { doc, getDoc, getDocs, collection, getFirestore } from "firebase/firestore";
import { app } from "../index"
import { useState, useEffect } from 'react';
import Putovanja from './Putovanja'
import PutovanjaCheckbox from './PutovanjaCheckbox'

function App() {
  const [db, setDb] = useState(getFirestore(app))
  const [putovanja, setPutovanja] = useState([])
  const [checked, setChecked] = useState({zimsko: false, ljetno: false, proljetno: false})

  const handleCheck = (e, type) => {
    let checkedAfter = {...checked}
    checkedAfter[type] = !checkedAfter[type];
    setChecked(checkedAfter);
}

  const ucitaj = async () => {
    const querySnapshot = await getDocs(collection(db, 'putovanja')); 
    const getCars = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPutovanja(getCars);
    // setPutovanja([...getCars]);
    console.log(getCars);
  }
  
  useEffect(() => { 
    ucitaj() ;
  }, [])
  


  return (
    <div className="App">
      <PutovanjaCheckbox handleCheck={handleCheck}/>
      <Putovanja predmeti={putovanja} checked={checked} > </Putovanja>
       
    </div>
  );
}

export default App;
