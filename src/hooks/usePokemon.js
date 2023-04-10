import { useContext, useEffect } from 'react'
import { PokeContext } from '../context/pokeContext.jsx'
import useService from './useService.js'

export default function usePokemon (url) {
  const { pokemons, setPokemons, setNextPage, setPreviusPage } = useContext(PokeContext)
  const { data } = useService(url, 'axios')

  useEffect(() => {
    if (data) {
      const { results } = data
      setNextPage(data.next)
      setPreviusPage(data.previous)
      const promises = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        return data
      })
      Promise.all(promises).then((pokemons) => {
        // console.log(pokemons)
        setPokemons(pokemons)
      })
    }
  }, [data])
  return [pokemons, setPokemons]
}
