import React, {useState, useEffect} from 'react'
import axios from 'axios'
import getData from '../helpers/getData'
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
        
        if(!typeFilters) return
        
        typeFilters.forEach(type => {
            getData(`https://pokeapi.co/api/v2/type/${type}`)
                .then(res => {
                   
                    if(typeFilters.length === 1) setPokemons([])

                    setPokemons(prevPokemons => [...prevPokemons, ...res])
                    
                })
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