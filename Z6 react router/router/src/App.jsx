import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header></Header>
   <Outlet />
   <Footer/>
    </>
  )
}

export default App
