import React, { Fragment, useState } from 'react'

const Nav = () => {
  const [menu] = useState([
    { name: 'index', title: 'Home', href: 'index.html' },
    { name: 'myskills', title: 'My skills', href: 'myskills.html' },
    { name: 'Portfolio', title: 'Portfolio', href: 'Portfolio.html' },
    { name: 'Contact', title: 'Contact', href: 'Contact.html' }
  ])
  const [activeMenuName] = useState('index')
  return (
    <Fragment>
      {/* <a className="menu_trigger" href="#">menu</a> */}
      <nav id="nav">
        <ul>{ menu.map(({ name, title, href, active = name === activeMenuName }) => (
          <li key={ name }>
            <a { ...active ? { className: 'active' } : {} } href={ (!active && href) || '#' }>{ title }</a>
          </li>)) }
        </ul>
      </nav>
    </Fragment>
  )
}

const Header = () => {
  return (
    <Fragment>
      <Nav />
      <h1 className="logo">saintkim12</h1>
      <h2 className="slogan">Web Developer</h2>
    </Fragment>
  )
}
export default Header
