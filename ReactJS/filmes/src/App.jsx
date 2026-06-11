import './App.css'
import Rotas from './assets/Routes/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Rotas />
        </BrowserRouter>
    )
}

export default App