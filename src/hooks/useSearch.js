import { useState, useContext } from 'react'
import { PokeContext } from '../context/pokeContext.jsx'
export default function useSearch () {
  const [search, setSearch] = useState('')
  const { setPokemons, setErrorSearch } = useContext(PokeContext)
  const [loading, setLoading] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    const url = 'https://pokeapi.co/api/v2/pokemon/' + search

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemons([data])
        setErrorSearch(false)
        setLoading(false)
      })
      .catch(() => {
        setErrorSearch(true)
        setPokemons([])
        setLoading(false)
      })
  }

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase()
    setSearch(query)
  }

  return {
    search,
    setSearch,
    handleSubmit,
    handleChange,
    loading
  }
}
