
import Card from './Card.jsx'
import Search from './Search'
import ListTypes from './ListTypes'
import usePokemon from '../hooks/usePokemon'
import { useService } from '../hooks/useService'

const ListPokemons = () => {
  const [pokemons, setPokemons] = usePokemon()
  const { data, loading, error } = useService('https://pokeapi.co/api/v2/pokemon', 'axios')
  console.log(data, loading, error)

  return (
    <>
      <Search />
      <ListTypes setPokemons={setPokemons} />
      <main className=''>
        <div className='container grid'>
          <div className='row g-col-4'>
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
