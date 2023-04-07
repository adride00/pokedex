import { useContext } from 'react'
import { PokeContext } from '../context/pokeContext.jsx'

export default function usePokemon () {
  const { pokemons, setPokemons } = useContext(PokeContext)

  return [pokemons, setPokemons]
}
