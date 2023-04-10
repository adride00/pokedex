import { useContext } from 'react'
import { PokeContext } from '../context/pokeContext.jsx'
import axios from 'axios'
const Pagination = () => {
  const { setPreviusPage, nextPage, setNextPage, setPokemons, previusPage } = useContext(PokeContext)
  const handlePreviusPage = () => {
    if (previusPage === null) return
    console.log(previusPage)
    axios.get(previusPage)
      .then((response) => {
        setPokemons([])
        setNextPage(response.data.next)
        setPreviusPage(response.data.previous)
        const results = response.data.results
        console.log(results)
        const promises = results.map(async (pokemon) => {
          const response = await fetch(pokemon?.url)
          const data = await response.json()
          return data
        })
        Promise.all(promises).then((pokemons) => {
          // console.log(pokemons)
          setPokemons(pokemons)
        })
      })
  }
  const handleNextPage = () => {
    console.log(nextPage)
    axios.get(nextPage)
      .then((response) => {
        setNextPage(response.data.next)
        setPreviusPage(response.data.previous)
        const results = response.data.results
        console.log(results)
        const promises = results.map(async (pokemon) => {
          const response = await fetch(pokemon.url)
          const data = await response.json()
          return data
        })
        Promise.all(promises).then((pokemons) => {
          // console.log(pokemons)
          setPokemons(pokemons)
        })
      })
  }

  return (
    <>
      <nav aria-label='Page navigation example' className='pagination justify-content-center'>
        <ul className='pagination'>
          <li className='page-item'>
            <a className='page-link' href='#' onClick={handlePreviusPage}>
              Previous
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#' onClick={handleNextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination
