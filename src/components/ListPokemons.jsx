import React, {useState, useEffect} from 'react'
import Card from './Card.jsx'
const ListPokemons = () => {

  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(data => {
        const {results} = data  
        setPokemons(data.results)
      })
    
  }, [])
  return (
    <>
        <main className=''>
          <div className="container grid">
            <div className="row g-col-4">
              {
                pokemons.map((pokemon, index) => {
                  return <Card key={index} pokemon={pokemon} />
                })
              }
              
            </div>
          </div>
        </main>
    </>
  )
}

export default ListPokemons