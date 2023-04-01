
import Card from './Card.jsx'
import Search from './Search'
import ListTypes from './ListTypes'
import usePokemon from '../hooks/usePokemon'
const ListPokemons = () => {
  const [pokemons, setPokemons] = usePokemon()

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
