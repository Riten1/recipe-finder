import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import RecipeItem from '../components/RecipeItem'
import { useId } from 'react'

const Home = () => {
  const id = useId();
  const {favoritelists, loading} = useContext(GlobalContext)
  return (
  <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10' key={id}>
  {
    favoritelists && favoritelists.length > 0 ?
    favoritelists.map(item => <RecipeItem item={item} id ={item.id}/>)
    : (
      <div>
        <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing is added in favorites.</p>
      </div>
    )
  }
  </div>
  )
}

export default Home