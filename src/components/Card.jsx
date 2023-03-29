import { useState, useEffect } from 'react';
import {typesPokemons, font, stats} from './styles/card.js'

const Card = ({pokemon}) => {

  const [dataPokemon, setDataPokemon] = useState([])
  const [tipoPokemon, setTipoPokemon] = useState('') 


  useEffect(() => {
    if(!pokemon) return
    fetch(pokemon.url)
        .then(res => res.json())
        .then(data => {
            setDataPokemon(data)

            const {types} = data
            const typeName = types[0].type.name
            
            const typeStyle = typesPokemons.find(type => type.nombre === typeName)
          
            setTipoPokemon(typeStyle.style)
            
        })
  }, []);
  return (
    <>
        <div className="col-4 ">

            <div className="card d-flex align-items-center w-75 rounded mt-2" style={tipoPokemon}>
            <div className="d-flex justify-content-between">
                <div>
                    <img src="src/assets/pokebola.png" alt="" width="25" />
                </div>
                <span>
                    # {dataPokemon.id}
                </span>
            </div>
            <img src={dataPokemon.sprites?.other.dream_world.front_default} width='150px' height='150px' className="p-3 bg-ligth d-flex align-items-center" alt="..." />
            <div className="card-body w-100">
                <h5 className="card-title text-center fw-bolder" style={font}>{dataPokemon.name}</h5>
                <div className=" text-center">
                <div className="row gap-2 d-flex justify-content-center">
                    <div className="col-3 bg-light-subtle rounded-3 border w-25">
                    <i><img src="src/assets/battle.png" width="25" alt="" /></i>
                    <p className="" style={stats}>Attack</p>
                    <p></p>
                    </div>
                    <div className="col-3 bg-light-subtle rounded-3 border">
                    <i><img src="src/assets/defence.png" width="25" alt="" /></i>
                    <p className="" style={stats}>Defense</p>
                    <p></p>
                    </div>
                    <div className="col-3 bg-light-subtle rounded-3 border">
                    <i><img src="src/assets/heart-attack.png" width="25" alt="" /></i>
                    <p className="" style={stats}>Salud</p>
                    <p></p>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-footer w-100">
                <small className="text-body-secondary d-flex justify-content-center gap-2">
                    {
                        dataPokemon.types?.map((type, index) => {
                            return <span key={index} className="badge bg-dark text-bg-primary">{type.type.name}</span>
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