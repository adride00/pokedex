import { useState } from 'react'

export default function useSearch ({setPokemons}) {
    const [search, setSearch] = useState('')

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
    let query = event.target.value.toLowerCase()
    setSearch(query)
  }

    return {
        search,
        setSearch,
        handleSubmit,
        handleChange
    }
    
}