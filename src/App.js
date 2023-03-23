import React from 'react'
import {Navbar} from './components/index'
import {Home, About, Projects, Skills, Footer} from './container/index'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills />
      <Projects/>
      <Footer/>
    </> 
  )
}

export default App