import axios from 'axios'
import React, {useState} from 'react'

const Search = () => {

    const [search, setSearch] = useState('')


   const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(res => {
        console.log(res.data)
    })
  }

  const handleChange = (event) => {
    let query = event.target.value.toLowerCase()
    setSearch(query)
  }

  return (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <form onSubmit={handleSubmit} className='w-100 d-flex'>
                            <input onChange={handleChange} name='search' value={search} type="text" className="form-control" placeholder="Busca un Pokemon" aria-label="Busca un Pokemon" aria-describedby="button-addon2" />
                            <button type="submit" className="btn  bg-primary" id="button-addon2"><img src="src/assets/ubicacion.png" width="25" alt="" /></button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Search