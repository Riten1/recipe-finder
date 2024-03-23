import React from 'react'

const RecipeItem = ({item, id}) => {
  return (
    <div key={id}>{item}</div>
  )
}

export default RecipeItem