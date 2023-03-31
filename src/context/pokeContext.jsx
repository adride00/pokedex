import {createContext, useState} from 'react';

export const PokeContext = createContext();

export function PokemonProvider ({children}) {
    const [pokemons, setPokemons] = useState([]);
    return (
        <PokeContext.Provider value={{
            pokemons,
            setPokemons
        }}>
            {children}
        </PokeContext.Provider>
    )
}