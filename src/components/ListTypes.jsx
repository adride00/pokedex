
import { useState, useEffect, useContext } from 'react'
import Types from './Types.jsx'
import useService from '../hooks/useService'
import { PokeContext } from '../context/pokeContext.jsx'
const urlTypes = 'https://pokeapi.co/api/v2/type/'

const ListTypes = () => {
  const [types, setTypes] = useState([])
  const { data } = useService(urlTypes, 'fetch')
  const [typeFilters, setTypeFilters] = useState([])
  const { pokemons, setPokemons, setErrorSearch } = useContext(PokeContext)
  useEffect(() => {
    if (!types) return
    if (data) {
      // console.log(data, loading, error)
      setTypes(data?.results)
    }
  }, [data])
  useEffect(() => {
    if (!typeFilters) return
    setPokemons([])

    const promises = typeFilters.map((type) => {
      return fetch(`https://pokeapi.co/api/v2/type/${type}`)
    })
    Promise.all(promises)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()))
      })
      .then((results) => {
        const pokemons = results.map((result) => result.pokemon)
        // console.log(pokemons)
        setErrorSearch(false)
        const pokemonsFiltered = pokemons.flat().map((pokemon) => pokemon.pokemon)
        // console.log(pokemonsFiltered)
        pokemonsFiltered.map((pokemon) => {
          return fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => {
              setPokemons((prev) => [...prev, data])
            })
        })
      })
  }, [typeFilters])

  return (
    <>
      <ul className='nav justify-content-center gap-3 container'>
        {types.map((type, index) => {
          return (
            <Types
              key={type.name}
              type={type}
              setTypeFilters={setTypeFilters}
            />
          )
        })}
      </ul>
    </>
  )
}

export default ListTypes
