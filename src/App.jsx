import React, { Fragment, useEffect, useState } from 'react'
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import Context from './Context'
import Section from './Section'
import Header from './Header'
import Footer from './Footer'
import SectionAchievements from './SectionAchievements'
import SectionSkills from './SectionSkills'
import SectionPortfolio from './SectionPortfolio'
import SectionContact from './SectionContact'

const Nav = () => {
  const [menu] = useState([
    { name: 'index', title: 'Home', to: '/' },
    { name: 'myskills', title: 'My skills', to: '/myskills' },
    { name: 'portfolio', title: 'Portfolio', to: '/portfolio' },
    { name: 'contact', title: 'Contact', to: '/contact' }
  ])
  // const [activeMenuName] = useState('index')
  return (
    <Fragment>
      {/* mobile menu button */}
      <a className="menu_trigger" href="#">menu</a>
      <nav id="nav">
        <ul>{ menu.map(({ name, title, to }) => (
          <li key={ name }>
            <NavLink activeClassName="active" exact to={ to }>{ title }</NavLink>
          </li>)) }
        </ul>
      </nav>
    </Fragment>
  )
}

const App = () => {
  const [displayInfo, setDisplayInfo] = useState(false)
  const [pageData, setPageData] = useState({ user: {}, achievements: {}, mySkill: {} })
  useEffect(function fetchData() {
    import('./data.js').then(({ default: data }) => ({ data }))
      .then(({ data }) => setPageData(data))
  }, [])
  const value = {
    ui: {
      displayInfo,
      showDisplayInfo: () => setDisplayInfo(true),
      hideDisplayInfo: () => setDisplayInfo(false)
    },
    data: pageData
  }
  return (
    <Context.Provider value={ value }>
      <div id="wrapper" className="inner">
        <Router>
          <div className="wrapper-holder">
            <Header>
              { Nav() }
            </Header>
          </div>
          <div className="wrapper-holder grey">
            <Section>
              <Switch>
                <Route exact path="/" component={ SectionAchievements } />
                <Route path="/myskills" component={ SectionSkills } />
                <Route path="/portfolio" component={ SectionPortfolio } />
                <Route path="/contact" component={ SectionContact } />
              </Switch>
            </Section>
          </div>
        </Router>
        <Footer />
      </div>
    </Context.Provider>
  )
}
export default App
