import React, {useState, useEffect} from 'react'
import {typesPokemons} from './styles/card.js'
const Types = ({type, setTypeFilters}) => {

    const [stylePokemon, setStylePokemon] = useState({})
    const [types, setTypes] = useState([])

    const handleChange = (e) => {
        // get id of the checkbox
        const id = e.target.id
        setTypeFilters(prevState => {
            if(e.target.checked) {
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
        <li className="nav-item alert alert-primary" style={stylePokemon}>
            <div className="form-check form-switch">
                <input className="form-check-input" onChange={handleChange} type="checkbox" role="switch" id={type.name} />
                <label className="form-check-label fw-bold" for={type.name}>{type.name.toUpperCase()}</label>
            </div>
        </li>
    </>
  )
}

export default Types