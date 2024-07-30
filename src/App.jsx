import React from 'react'
import {useState} from "react"

const App = () => {

const [color, setcolor] = useState("black");

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center left-11 inset-x-0 py-2 ' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl' >
          
        <button 
        onClick={() => setcolor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}
          >Red</button>
          
          <button 
          onClick={() => setcolor("orange")}

          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Orange"}}
          >Orange</button>

          <button 
          onClick={() => setcolor("green")}
  
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Green"}}
          >Green</button>

          <button 
          onClick={() => setcolor("blue")}

          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Blue"}}
          >Blue</button>

          <button
          onClick={() => setcolor("white")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:"White"}}
          >White</button>

          <button 
          onClick={() => setcolor("turquoise")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:"Turquoise"}}
          >Turquoise</button>
        </div>

      </div>

    </div>
  )
}

export default App