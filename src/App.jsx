import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //Estado para saber si está activado o no.
  const [enabled, setEnabled] = useState(false)
  //Seteamos la posicion
  const [position, setPosition] = useState({x: 0, y: 0})// Es buena practica poner lo valores iniciales.

  useEffect(()=>{
    console.log(`effect ${enabled}`)
    //Siempre dentro del useEffect
    const handleMove = (event)=>{
        const {clientX, clientY} = event //sacamos la posioción x e y del evento
        console.log('handlemovie', {clientX, clientY}) 
        setPosition({x: clientX, y: clientY}) //seteamos los valores de x e y con esa posición
    }

    //Para saber la pocisiones del puntero del mouse
    if(enabled){
      window.addEventListener('pointermove', handleMove )
    }

    // Cleanup del evento cuando el efecto se desmonte o cambie "enabled"
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
    
  },[enabled])

  return (
    <main>
        <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)` //Para que se mueva dicha posición del estado.
        }}
      />
      <button onClick={()=>{setEnabled(!enabled) }}   >{enabled ? 'Desactivar' : 'Activar'} el puntero</button>
    </main>
      
    
  )
}

export default App
