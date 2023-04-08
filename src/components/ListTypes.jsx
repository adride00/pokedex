
import { useState, useEffect } from 'react'

import Types from './Types.jsx'
import useService from '../hooks/useService'
const urlTypes = 'https://pokeapi.co/api/v2/type/'
const ListTypes = ({ setPokemons }) => {
  const [types, setTypes] = useState([])
  const { data } = useService(urlTypes, 'fetch')
  const [typeFilters, setTypeFilters] = useState([])
  useEffect(() => {
    if (!types) return
    if (data) {
      // console.log(data, loading, error)
      setTypes(data?.results)
    }
  }, [data])
  useEffect(() => {
    if (!typeFilters) return
    console.log('sdd', typeFilters)
    
    // setPokemons((prevPokemons) => [...prevPokemons, ...results])
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
