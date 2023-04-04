
import Card from './Card.jsx'
import Loading from './Loading'
import usePokemon from '../hooks/usePokemon'
const ListPokemons = () => {
  const [pokemons, setPokemons] = usePokemon()

  return (
    <>
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
