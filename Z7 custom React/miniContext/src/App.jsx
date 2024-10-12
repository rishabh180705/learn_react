import React, { useState } from 'react'

import UserContextProvider from './context/userContextProvider'
import Login from './component/login'
import Profile from './component/profile'

function App() {


  return (
   <UserContextProvider>
    <h1>React with chai and share is important</h1>
    <Login></Login>
    <Profile></Profile>
   </UserContextProvider>
  )
}

export default App
