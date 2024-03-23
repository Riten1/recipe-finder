import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import RecipeItem from '../components/RecipeItem'
import { useId } from 'react'

const Home = () => {
  const id = useId();
  const {recipeList, loading} = useContext(GlobalContext)
  return (
  <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10' key={id}>
  {
    recipeList && recipeList.length > 0 ?
    recipeList.map(item => <RecipeItem item={item} id ={item.id}/>)
    : (
      <div>
        <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing to show. Please search something</p>
      </div>
    )
  }
  </div>
  )
}

export default Home