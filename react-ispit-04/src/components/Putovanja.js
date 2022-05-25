import React from 'react'
import Putovanje from './Putovanje'

const Putovanja = ({ predmeti, checked ,updateItem, deletePredmet}) => {
  console.log(predmeti);

  return (
    <div>
      {predmeti.map(({naziv, mobitel, cijena, timestamp, frizider, sat, id}) => {
        return (
          (mobitel && checked.mobitel)
          || (frizider && checked.frizider)
          || (sat && checked.sat) 
              ?
              <Putovanje
              update={updateItem}
                  key={id}
                  naziv={naziv}  
                  mobitel={mobitel}  
                  cijena={cijena}  
                  timestamp={timestamp}  
                  frizider={frizider}  
                  deletePredmet={deletePredmet}
                  id={id}
              /> : null
      );
      })}
    </div>
  )
}

export default Putovanja