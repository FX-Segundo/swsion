import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Conocenos from './pages/Conocenos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation />
      <Home />
      {/* <Conocenos  /> */}
    </div>
  )
}

export default App;
