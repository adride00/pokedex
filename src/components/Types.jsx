import React, {useState, useEffect} from 'react'
import {typesPokemons} from './styles/card.js'
const Types = ({type}) => {

    const [stylePokemon, setStylePokemon] = useState({})

    useEffect(() => {
        
        const tipoPokemon = typesPokemons.find(typePokemon => typePokemon.nombre === type.name)
        
        setStylePokemon(tipoPokemon.style)
    }, [])
  return (
    <>
        <li className="nav-item alert alert-primary" style={stylePokemon}>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id={type.name} />
                <label className="form-check-label fw-bold" for={type.name}>{type.name.toUpperCase()}</label>
            </div>
        </li>
    </>
  )
}

export default Types