import '../App.css';
import { doc, getDoc, getDocs, collection, getFirestore } from "firebase/firestore";
import { app } from "../index"
import { useState, useEffect } from 'react';
import Uredaji from './Uredaji'
import CekiraniUredaji from './CekiraniUredaji'

function App() {

  const [db, setDb] = useState(getFirestore(app))
  const [checked, setChecked] = useState({mobitel: false, tablet: false, frizider: false, sat: false})
  const [uredaji, setUredaji] = useState([])


  const ucitaj = async () => {
    const querySnapshot = await getDocs(collection(db, 'uredaji2')); 
    const get  = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // setUredaji(get ); 
    setUredaji([...get]); 
    console.log(uredaji); 
  }

   const handleCheck = (e, type) => {
    let checkedAfter = {...checked}
    checkedAfter[type] = !checkedAfter[type];
    setChecked(checkedAfter);
}
  
  useEffect(() => { 
    ucitaj() ;
  }, [])
  


  return (
    <div className="App"> 
      <CekiraniUredaji handleCheck={handleCheck}/>
      <Uredaji uredaji={uredaji}> checked={checked}  </Uredaji>
       
    </div>
  );
}

export default App;