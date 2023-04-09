import React, { useContext } from 'react'
import useSearch from '../hooks/useSearch'
import PokeNotFound from './PokeNotFound'
import { PokeContext } from '../context/pokeContext.jsx'
const Search = () => {
  const { search, handleSubmit, handleChange } = useSearch()
  const { pokemons, errorSearch } = useContext(PokeContext)
  return (
    <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-12'>
            <div className='input-group mb-3'>
              <form onSubmit={handleSubmit} className='w-100 d-flex'>
                <input
                  onChange={handleChange}
                  name='search'
                  value={search}
                  type='text'
                  className='form-control'
                  placeholder='Busca un Pokemon'
                  aria-label='Busca un Pokemon'
                  aria-describedby='button-addon2'
                />
                <button
                  type='submit'
                  className='btn  bg-primary'
                  id='button-addon2'
                >
                  <img src='src/assets/ubicacion.png' width='25' alt='' />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {
        (errorSearch && pokemons) && <PokeNotFound />
      }
    </>
  )
}

export default Search
