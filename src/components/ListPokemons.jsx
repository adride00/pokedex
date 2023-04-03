
import Card from './Card.jsx'
import Search from './Search'
import ListTypes from './ListTypes'
import Loading from './Loading'
import usePokemon from '../hooks/usePokemon'
import useService from '../hooks/useService'
import { useEffect } from 'react'
const ListPokemons = () => {
  const [pokemons, setPokemons] = usePokemon()
  const { data, loading, error } = useService('https://pokeapi.co/api/v2/pokemon', 'axios')

  useEffect(() => {
    // console.log(data, loading, error)
    setPokemons(data?.results)
  }, [data])

  return (
    <>
      <Search />
      <ListTypes setPokemons={setPokemons} />
      {
        loading
          ? (<Loading />)
          : (
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
            )
      }
    </>
  )
}

export default ListPokemons
