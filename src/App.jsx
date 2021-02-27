import React, { useState } from 'react'
import Context from './Context'
import Section from './Section'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  const [displayInfo, setDisplayInfo] = useState(false)
  return (
    <Context.Provider value={ { displayInfo, showDisplayInfo: () => setDisplayInfo(true), hideDisplayInfo: () => setDisplayInfo(false) } }>
      <div className="wrapper-holder">
        <Header />
      </div>
      <div className="wrapper-holder grey">
        <Section />
      </div>
      <Footer />
    </Context.Provider>
  )
}
export default App
