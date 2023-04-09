
import { useContext } from 'react'
import Card from './Card.jsx'
import { PokeContext } from '../context/pokeContext.jsx'
const ListPokemons = () => {
  const { pokemons } = useContext(PokeContext)

  return (
    <>
      <main className=''>
        <div className='container '>
          <div className='row'>
            {
                pokemons?.map((pokemon, index) => {
                  return <Card key={index + Math.random()} pokemon={pokemon} />
                })
              }

          </div>
        </div>
      </main>

    </>
  )
}

export default ListPokemons
