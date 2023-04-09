import { createContext, useState } from 'react'

export const PokeContext = createContext()

export function PokemonProvider ({ children }) {
  const [pokemons, setPokemons] = useState([])
  const [errorSearch, setErrorSearch] = useState(false)

  return (
    <PokeContext.Provider value={{
      pokemons,
      setPokemons,
      errorSearch,
      setErrorSearch
    }}
    >
      {children}
    </PokeContext.Provider>
  )
}
