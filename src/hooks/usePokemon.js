import { useEffect, useContext } from 'react'
import { PokeContext } from '../context/pokeContext.jsx'
import { useService } from '../hooks/useService'

export default function usePokemon () {
  const { pokemons, setPokemons } = useContext(PokeContext)
  const { data, loading, error } = useService('https://pokeapi.co/api/v2/pokemon', 'axios')

  useEffect(() => {
    if (!pokemons) return

    if (data) {
      const { results } = data
      console.log(data, loading, error)
      setPokemons(results)
    }
  }, [])

  return [pokemons, setPokemons]
}
