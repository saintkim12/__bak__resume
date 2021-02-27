import React, { Fragment, useContext, useEffect, useState } from 'react'
import Context from './Context'

const Header = ({ children }) => {
  const [userName] = useState('saintkim12')
  useEffect(() => {
    document.title = userName
  }, [userName])
  const { displayInfo = false } = useContext(Context)
  return (
    <header id="header">
      { children }
      { displayInfo && (
        <Fragment>
          <h1 className="logo">{ userName }</h1>
          <h2 className="slogan">Web Developer</h2>
        </Fragment>) }
    </header>
  )
}
export default Header
