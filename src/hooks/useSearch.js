import { useState, useContext } from 'react'
import { PokeContext } from '../context/pokeContext.jsx'

export default function useSearch () {
  const [search, setSearch] = useState('')
  const { setPokemons } = useContext(PokeContext)

  const handleSubmit = (event) => {
    event.preventDefault()

    const res = [
      {
        name: search,
        url: 'https://pokeapi.co/api/v2/pokemon/' + search
      }
    ]
    setPokemons(res)
  }

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase()
    setSearch(query)
  }

  return {
    search,
    setSearch,
    handleSubmit,
    handleChange
  }
}
