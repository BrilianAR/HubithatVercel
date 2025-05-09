import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="font-bold text-3xl text-center text-red-500">
        Ini adalah website arsitek yang sedang dibangun oleh dendi, brilian, dan giga
      </p>
    </>
  )
}

export default App
