import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Tracking} from './Components/Tracking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Tracking/>
      
    </div>
   
  )
}

export default App
