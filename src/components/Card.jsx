import { useState, useEffect } from 'react'
import { typesPokemons, font } from './styles/card.js'
import BadgeStats from './BadgeStats.jsx'
const Card = ({ pokemon }) => {
  const [tipoPokemon, setTipoPokemon] = useState([])
  const [stats, setStats] = useState([])

  useEffect(() => {
    const { types } = pokemon
    const typeName = types[0].type.name

    const typeStyle = typesPokemons.find(type => type.nombre === typeName)

    setTipoPokemon(typeStyle.style)
    setStats([
      {
        name: 'HP',
        value: pokemon?.stats[0].base_stat,
        icon: 'src/assets/heart-attack.png'
      },
      {
        name: 'Attack',
        value: pokemon?.stats[1].base_stat,
        icon: 'src/assets/battle.png'
      },
      {
        name: 'Defense',
        value: pokemon?.stats[2].base_stat,
        icon: 'src/assets/defence.png'
      }

    ])
  }, [])
  return (
    <>
      <div className='col-4 '>

        <div className='card d-flex align-items-center w-75 rounded mt-2' style={tipoPokemon}>
          <div className='d-flex justify-content-between'>
            <div>
              <img src='src/assets/pokebola.png' alt='' width='25' />
            </div>
            <span className='fw-bold'>
              # {pokemon.id}
            </span>
          </div>
          <img src={pokemon.sprites?.other.dream_world.front_default ? pokemon.sprites?.other.dream_world.front_default : pokemon.sprites?.front_default} width='150px' height='150px' className='p-3 bg-ligth d-flex align-items-center' alt='...' />
          <div className='card-body w-100'>
            <h5 className='card-title text-center fw-bolder' style={font}>{pokemon.name}</h5>
            <div className=' text-center'>
              <div className='row gap-2 d-flex justify-content-center'>
                {
                        stats.map((stat, index) => <BadgeStats key={index} stat={stat} />)
                    }
              </div>
            </div>
          </div>
          <div className='card-footer w-100'>
            <small className='text-body-secondary d-flex justify-content-center gap-2'>
              {
                        pokemon.types?.map((type, index) => {
                          return <span key={index} className='badge bg-dark text-bg-primary'>{type.type.name}</span>
                        })
                    }

            </small>
          </div>
        </div>

      </div>
    </>
  )
}

export default Card
