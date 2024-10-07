import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(()=>{
    console.log(`effect ${enabled}`)
  },[enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate (0px, 0px)`
        }}
      />
      <h3>Mouse Follower</h3>
      <button onClick={()=>{setEnabled(!enabled) }}   >{enabled ? 'Desactivar' : 'Activar'} el puntero</button>
    </>
  )
}

export default App
