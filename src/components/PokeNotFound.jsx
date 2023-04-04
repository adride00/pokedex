import React from 'react'

const PokeNotFound = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='alert alert-danger text-center' role='alert'>
              <img src='src/assets/error.png' className='img-responsive me-4' alt='img pokemon error' width='25' />
              <span>Pokemon no encontrado</span>
              <img src='src/assets/error.png' className='img-responsive ms-4' alt='img pokemon error' width='25' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokeNotFound
