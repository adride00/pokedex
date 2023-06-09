import React, { useState, useEffect } from 'react'
import { typesPokemons } from './styles/card.js'
const Types = ({ type, setTypeFilters }) => {
  const [stylePokemon, setStylePokemon] = useState({})

  // useType()
  // console.log('type', type)
  const handleChange = (e) => {
    const { checked } = e.target
    if (checked) {
      setTypeFilters((prevTypeFilters) => [...prevTypeFilters, e.target.id])
    } else {
      // quitar el tipo de filtro
      setTypeFilters((prevTypeFilters) => prevTypeFilters.filter((type) => type !== e.target.id))
    }
  }

  useEffect(() => {
    const tipoPokemon = typesPokemons.find(typePokemon => typePokemon.nombre === type.name)

    setStylePokemon(tipoPokemon.style)
  }, [])

  return (
    <>
      <li className='nav-item alert alert-primary p-1' style={stylePokemon}>
        <div className='form-check form-switch'>
          <input className='form-check-input' onChange={handleChange} type='checkbox' role='switch' id={type?.name} />
          <label className='form-check-label fw-bold' htmlFor={type.name}>{type.name.toUpperCase()}</label>
        </div>
      </li>
    </>
  )
}

export default Types
