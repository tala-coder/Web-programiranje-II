import React from 'react'
import Putovanje from './Putovanje'

const Putovanja = ({ predmeti, checked }) => {
  console.log(predmeti);

  return (
    <div>
      {predmeti.map(({naziv, zimsko, ljetno, proljetno, id}) => {
        return (
          (zimsko && checked.zimsko)
          || (ljetno && checked.ljetno)
          || (proljetno && checked.proljetno) 
              ?
              <Putovanje
                  key={id}
                  naziv={naziv}
                  zimsko={zimsko}
                  ljetno={ljetno}
                  proljetno={proljetno}
                  // poslovno={poslovno}
                  // deletePredmet={deletePredmet}
                  id={id}
              /> : null
      );
      })}
    </div>
  )
}

export default Putovanja