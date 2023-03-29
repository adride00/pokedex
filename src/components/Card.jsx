import { useState, useEffect } from 'react';
import {tipoTierra, tipoAgua, font, stats, tipoFuego} from './styles/card.js'

const Card = ({pokemon}) => {

  const [dataPokemon, setDataPokemon] = useState([])

  useEffect(() => {
    fetch(pokemon.url)
        .then(res => res.json())
        .then(data => {
            setDataPokemon(data)
            console.log(data.sprites.other.dream_world.front_default)
        })
  }, []);
  return (
    <>
        <div className="col-4 ">

            <div className="card d-flex align-items-center w-75 rounded mt-2" style={tipoFuego}>
            <span><img src="src/assets/pokebola.png" alt="" width="25" />N {dataPokemon.id}</span>
            <img src={dataPokemon.sprites?.other.dream_world.front_default} width='150px' height='150px' className="p-3 bg-ligth d-flex align-items-center" alt="..." />
            <div className="card-body w-100">
                <h5 className="card-title text-center fw-bolder" style={font}>Pikachu</h5>
                <div className=" text-center">
                <div className="row gap-2 d-flex justify-content-center">
                    <div className="col-3 bg-light-subtle rounded-3 border w-25">
                    <i><img src="src/assets/battle.png" width="25" alt="" /></i>
                    <p className="" style={stats}>Attack</p>
                    <p>124</p>
                    </div>
                    <div className="col-3 bg-light-subtle rounded-3 border">
                    <i><img src="src/assets/defence.png" width="25" alt="" /></i>
                    <p className="" style={stats}>Defense</p>
                    <p>124</p>
                    </div>
                    <div className="col-3 bg-light-subtle rounded-3 border">
                    <i><img src="src/assets/heart-attack.png" width="25" alt="" /></i>
                    <p className="" style={stats}>Salud</p>
                    <p>124</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-footer w-100">
                <small className="text-body-secondary d-flex justify-content-center gap-2">
                <span class="badge text-bg-primary">Primary</span>
                <span class="badge text-bg-primary">Primary</span>
                </small>
            </div>
            </div>

        </div>
    </>
  )
}

export default Card