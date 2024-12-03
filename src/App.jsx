import { useState } from 'react'
import './App.css'

import React from 'react'
import Navigation from './components/Navigation'
import Introduction from './components/Introduction'
import About from './components/About'
import Projects from './components/Projects'
import Techstack from './components/Techstack'
import Contacts from './components/Contact'
function App() {

  return (
    <>
      <div className=''>
      <Navigation/>
      <main>
      <Introduction/>
      <About/>
      <Projects/>
      <Techstack/>
      <Contacts/>
      
      </main>
      </div>
    </>
  )
}
export default App
