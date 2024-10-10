import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("#fb8500")

  return (
    <>  
    {/* //fragment */}

       <div className="h-screen w-full duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"Blue"}}>Blue</button>
            <button onClick={()=>setColor("olive")}  className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"olive"}}>Olive</button>
            <button onClick={()=>setColor("magenta")}  className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"violet"}}>Magenta</button>
            <button onClick={()=>setColor("gray")}  className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"gray"}}>Gray</button>
            <button onClick={()=>setColor("yellow")}  className="outline-none px-4 py-1 rounded-full " style={{backgroundColor:"Yellow"}}>Yellow</button>
            <button onClick={()=>setColor("pink")}  className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>setColor("lavender")}  className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"lavender"}}>Lavender</button>
            <button onClick={()=>setColor("white")}  className='outline-none px-4 py-1 rounded-full ' style={{backgroundColor:"White"}}>White</button>
            <button onClick={()=>setColor("black")}  className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>setColor("purple")}  className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:"purple"}}>Purple</button>


          </div>
        </div>
        


       </div>
      
    </>
  )
}

export default App
