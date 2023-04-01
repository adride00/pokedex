import { useEffect, useContext } from 'react'
import { PokeContext } from '../context/pokeContext.jsx'

export default function usePokemon () {
  const { pokemons, setPokemons } = useContext(PokeContext)

  useEffect(() => {
    if (!pokemons) return
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(data => {
        const { results } = data

        setPokemons(results)
      })
  }, [])

  return [pokemons, setPokemons]
}
