import axios from 'axios'

export default function getData(url) {

    return axios.get(url)

    .then(res => {
        
        const {pokemon} = res.data
        const pokemons = pokemon?.map(pokemon => pokemon.pokemon)
        
        return pokemons
        
    })
        .catch(error => {

            console.log(error)
        })
}
