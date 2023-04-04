
import { useState, useEffect } from 'react'
import getData from '../helpers/getData'
import Types from './Types.jsx'
import useService from '../hooks/useService'

const ListTypes = ({ setPokemons }) => {
  const [types, setTypes] = useState([])
  const [typeFilters, setTypeFilters] = useState([])
  const { data, loading, error } = useService('https://pokeapi.co/api/v2/type', 'fetch')
  useEffect(() => {
    if (!types) return
    if (data) {
      // console.log(data, loading, error)
      setTypes(data?.results)
    }
  }, [data])

  useEffect(() => {
    if (!typeFilters) return

    typeFilters.forEach((type) => {
      getData(`https://pokeapi.co/api/v2/type/${type}`).then((res) => {
        if (typeFilters.length === 1) setPokemons([])

        setPokemons((prevPokemons) => [...prevPokemons, ...res])
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
