import React, {useState, useEffect} from 'react'
import Card from './Card.jsx'
import Search from './Search'

const ListPokemons = () => {

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
  
  return (
    <>
        
        <Search setPokemons={setPokemons} />
        <main className=''>
          <div className="container grid">
            <div className="row g-col-4">
              {
                pokemons?.map((pokemon, index) => {
                  return <Card key={index + Math.random()} pokemon={pokemon} />
                })
              }
              
            </div>
          </div>
        </main>
    </>
  )
}

export default ListPokemons