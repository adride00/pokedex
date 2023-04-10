import { createContext, useState } from 'react'

export const PokeContext = createContext()

export function PokemonProvider ({ children }) {
  const [pokemons, setPokemons] = useState([])
  const [errorSearch, setErrorSearch] = useState(false)
  const [previusPage, setPreviusPage] = useState('')
  const [nextPage, setNextPage] = useState('')

  return (
    <PokeContext.Provider value={{
      pokemons,
      setPokemons,
      errorSearch,
      setErrorSearch,
      previusPage,
      setPreviusPage,
      nextPage,
      setNextPage
    }}
    >
      {children}
    </PokeContext.Provider>
  )
}
