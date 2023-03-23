import React from 'react'
import {Navbar} from './components/index'
import {Home, About, Projects, Footer} from './container/index'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </> 
  )
}

export default App