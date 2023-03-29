import React, {useState} from 'react'
import {tipoTierra} from './styles/card.js'
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

              <div className="card d-flex align-items-center w-5" style={tipoTierra}>
                <span>N 001</span>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png" width='150px' className="p-3 bg-ligth rounded-circle d-flex align-items-center" alt="..." />
                <div className="card-body w-100">
                  <h5 className="card-title">Pikachu</h5>
                  <div className=" text-center">
                    <div className="row gap-2 d-flex justify-content-center">
                      <div className="col-3 bg-light-subtle rounded-5 border w-25">
                        <i>icon</i>
                        <p>Attack</p>
                        <p>124</p>
                      </div>
                      <div className="col-3 bg-light-subtle rounded-5 border">
                        <i>icon</i>
                        <p>Attack</p>
                        <p>124</p>
                      </div>
                      <div className="col-3 bg-light-subtle rounded-5 border">
                        <i>icon</i>
                        <p>Attack</p>
                        <p>124</p>
                      </div>
                
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
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