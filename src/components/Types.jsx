import React, { useState, useEffect } from 'react'
import { typesPokemons } from './styles/card.js'

const Types = ({ type, setTypeFilters }) => {
  const [stylePokemon, setStylePokemon] = useState({})

  const handleChange = (e) => {
    const id = e.target.id
    setTypeFilters(prevState => {
      if (e.target.checked) {
        return [...prevState, id]
      }
      return prevState.filter(type => type !== id)
    })
  }

  useEffect(() => {
    const tipoPokemon = typesPokemons.find(typePokemon => typePokemon.nombre === type.name)

    setStylePokemon(tipoPokemon.style)
  }, [])
  return (
    <>
      <li className='nav-item alert alert-primary p-1' style={stylePokemon}>
        <div className='form-check form-switch'>
          <input className='form-check-input' onChange={handleChange} type='checkbox' role='switch' id={type.name} />
          <label className='form-check-label fw-bold' htmlFor={type.name}>{type.name.toUpperCase()}</label>
        </div>
      </li>
    </>
  )
}

export default Types
