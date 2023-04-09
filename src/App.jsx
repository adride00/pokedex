
import NavBar from './components/NavBar'
import './App.css'
import Search from './components/Search'
import ListTypes from './components/ListTypes'
import usePokemon from './hooks/usePokemon'
import ListPokemons from './components/ListPokemons'
import Pagination from './components/Pagination'

const urlApi = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
function App () {
  usePokemon(urlApi)

  return (
    <>
      <main className='vw-100 vh-100'>
        <NavBar />
        <Search />
        <ListTypes />
        <Pagination />
        <ListPokemons />
      </main>
    </>
  )
}

export default App
