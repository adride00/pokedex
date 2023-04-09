import React from 'react'

const Pagination = () => {
  return (
    <>
      <nav aria-label='Page navigation example' className='pagination justify-content-center'>
        <ul className='pagination'>
          <li className='page-item'>
            <a className='page-link' href='#'>
              Previous
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination
