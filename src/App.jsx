import React from 'react'
import List from './components/List'
import Button from './components/Button'
import Container from './components/Container'
import Navber from './Layouts/Navber'
import Banner from './Layouts/Banner'
import Work from './Layouts/Work'
import Project from './Layouts/Project'
import FaqSection from './Layouts/FaqSection'
import Contact from './Layouts/Contact'
import Foter from './Layouts/Foter'


const App = () => {
  return (
    <>

    <Navber/>
    <Banner/>
    <Work/>
    <Project/>
    <FaqSection/>
    <Contact/>
    <Foter/>
   
   
    </>
  )
}

export default App