import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/global.css'
import './styles/effects.css'
import Deck from './Deck'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Deck />
  </StrictMode>,
)
