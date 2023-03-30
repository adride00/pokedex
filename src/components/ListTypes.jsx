import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Types from './Types.jsx'

const ListTypes = ({setPokemons}) => {

    const [types, setTypes] = useState([])
    const [typeFilters, setTypeFilters] = useState([])

    useEffect(() => {
        if(!types) return
        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => {
                const {results} = res.data
                
                setTypes(results)
            })
    }, [])

    useEffect(() => {
        console.log(typeFilters)
        if(!typeFilters) return
        axios.get(`https://pokeapi.co/api/v2/type/${typeFilters}`)

            .then(res => {
                
                const {pokemon} = res.data
                const pokemons = pokemon?.map(pokemon => pokemon.pokemon)
                setPokemons(pokemons)
                console.log(pokemons)

            })

    }, [typeFilters])

  return (
    <>
        <ul class="nav justify-content-center gap-3 container">
            {
                types.map((type, index) => {
                    return <Types key={type.name} type={type} setTypeFilters={setTypeFilters}/>
                })
            }
        </ul>
    </>
  )
}

export default ListTypes