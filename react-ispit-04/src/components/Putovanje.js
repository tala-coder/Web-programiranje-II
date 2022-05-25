import React from 'react'

const Putovanje = ({naziv, zimsko, ljetno, proljetno, id  }) => {
    console.log(id );
    
  return (
    <div className="w3-border w3-blue predmet">
    <p> {naziv} </p>
    <p> 
        {proljetno ? 'proljetno ' : ''}
        {zimsko ? 'zimsko ' : ''}
        {ljetno ? 'ljetno ' : ''}
    </p>
    <button
        className="w3-btn"
        // onClick={() => deletePredmet(id)}
    > Obrisi
    </button>
</div>
  )
}

export default Putovanje