import React from 'react'
import Putovanje from './Putovanje'

const Putovanja = ({putovanja }) => {
    console.log(putovanja);
    
    return (
        <div> 
          {putovanja.map((putovanje) => { 
            return (
              <article key={putovanje.id}>
                <Putovanje putovanje={putovanje} {...putovanje} />
              </article>
            )
          })}
        </div>
      )
    }

export default Putovanja