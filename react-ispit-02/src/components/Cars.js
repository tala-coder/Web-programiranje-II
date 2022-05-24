import React from 'react'
import Car from './Car'


const Cars = ({ cars, deleteItem, updateItem }) => {
  return (
    <div> 
      {cars.map((auto) => {
        return (
          <article key={auto.id}>
            <Car car={auto} {...auto} deleteItem = {deleteItem} update={updateItem} />
          </article>
        )
      })}
    </div>
  )
}

export default Cars