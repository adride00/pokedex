
import { useEffect } from 'react'
import NavBar from './components/NavBar'
import ListPokemons from './components/ListPokemons'
import './App.css'
import Search from './components/Search'
import ListTypes from './components/ListTypes'
import usePokemon from './hooks/usePokemon'
import useService from './hooks/useService'
import Loading from './components/Loading'
import PokeNotFound from './components/PokeNotFound'
function App () {
  const [pokemons, setPokemons] = usePokemon()
  const { data, loading, error } = useService('https://pokeapi.co/api/v2/pokemon', 'axios')

  useEffect(() => {
    // console.log(data, loading, error)
    setPokemons(data?.results)
  }, [data])

  return (
    <>
      <main className='vw-100 vh-100'>
        <NavBar />
        <Search />
        <ListTypes setPokemons={setPokemons} />
        {
          loading
            ? <Loading />
            : <ListPokemons />
        }
        {
          pokemons && <PokeNotFound />
        }
      </main>
    </>
  )
}

export default App
