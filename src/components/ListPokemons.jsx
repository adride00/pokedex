import React, {useState} from 'react'
import {tipoTierra, tipoAgua, font, stats, hover} from './styles/card.js'
const ListPokemons = () => {

  const [pokemons, setPokemons] = useState([])
  
//   useEffect(() => {
    
    
//   }, [])
  return (
    <>
        <main className=''>
          <div className="container grid">
            <div className="row g-col-4">
              <div className="col-4 ">

              <div className="card d-flex align-items-center w-75 rounded" style={tipoAgua}>
                <span><img src="src/assets/pokebola.png" alt="" width="25" /> N 001</span>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png" width='150px' className="p-3 bg-ligth rounded-circle d-flex align-items-center" alt="..." />
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
                <div className="card-footer">
                  <small className="text-body-secondary">
                  <span class="badge text-bg-primary">Primary</span>
                  </small>
                  
                  
                </div>
              </div>

              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default ListPokemons