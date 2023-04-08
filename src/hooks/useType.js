import { useState, useEffect, useContext } from 'react'
import useService from './useService.js'
import { PokeContext } from '../context/pokeContext.jsx'

export default function useType () {
  const [typeFilters, setTypeFilters] = useState([])
  const { setPokemons } = useContext(PokeContext)
  // const { data } = useService(urlTypes, 'axios')
  const [types, setTypes] = useState([])

  const handleChange = (e) => {
    const { checked, value } = e.target
    if (checked) {
      setTypeFilters((prevTypeFilters) => [...prevTypeFilters, e.target.id])
    } else {
      setTypeFilters((prevTypeFilters) => prevTypeFilters.filter((type) => type !== value))
    }
  }

  useEffect(() => {
    if (!typeFilters) return
    console.log(typeFilters)
    // const results = typeFilters.map((url) => useService(url, 'axios'))
    // setPokemons((prevPokemons) => [...prevPokemons, ...results])
  }, [typeFilters])

  return [handleChange]
}
