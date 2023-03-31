import {useState, useEffect} from 'react'

export default function usePokemon () {
    
    const [pokemons, setPokemons] = useState([])
  
    useEffect(() => {
      if(!pokemons) return
      fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(data => {
          const {results} = data  
          
          setPokemons(results)
        })
  
    }, [])
  
    return [pokemons, setPokemons]
  }