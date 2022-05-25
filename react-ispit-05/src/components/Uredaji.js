import React from 'react'
import Uredaj from './Uredaj'

const Uredaji = ({ uredaji, checked }) => {
  console.log(uredaji);

  return (
    <div>
      {uredaji.map(({naziv, mobitel, frizider, sat, id}) => {
        return (
          // (mobitel && checked.mobitel)
             (frizider && checked.frizider)
          || (sat && checked.sat) 
              ?
              <Uredaj
                  key={id}
                  naziv={naziv}
                  sat={sat} 
                  frizider={frizider}
                  // poslovno={poslovno}
                  // deletePredmet={deletePredmet}
                  id={id}
              /> : 'null'
      );
      })}
    </div>
  )
}


export default Uredaji