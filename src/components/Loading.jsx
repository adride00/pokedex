import React from 'react'
import './styles/rotate.css'
const Loading = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
            <img src='src/assets/pokebolaLoading.png' className='loader' alt='loading' width='25' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading
