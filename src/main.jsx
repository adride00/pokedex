import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PokemonProvider } from './context/pokeContext'
ReactDOM.createRoot(document.getElementById('root')).render(

  <PokemonProvider>
    <App />
  </PokemonProvider>

)
