import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Types from './Types.jsx'

const ListTypes = () => {

    const [types, setTypes] = useState([])

    useEffect(() => {
        if(!types) return
        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => {
                const {results} = res.data
                
                setTypes(results)
            })
    }, [])

  return (
    <>
        <ul class="nav justify-content-center gap-3 container">
            {
                types.map((type, index) => {
                    return <Types key={type.name} type={type} />
                })
            }
        </ul>
    </>
  )
}

export default ListTypes