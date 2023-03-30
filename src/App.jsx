
import NavBar from './components/NavBar'
import ListPokemons from './components/ListPokemons'
import Search from './components/Search'
import './App.css'
function App() {

  return (
    <>
      <main className="vw-100 vh-100">
        <NavBar />
        <Search />
        <ListPokemons />
      </main>
    </>
  )
}

export default App
