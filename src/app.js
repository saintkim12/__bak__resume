import { createElement } from 'react'
import { render } from 'react-dom'
import SectionAchievements from './SectionAchievements'
import Header from './Header'
import Footer from './Footer'

render(createElement(Header), document.getElementById('header'))
render(createElement(SectionAchievements), document.getElementById('main'))
render(createElement(Footer), document.getElementById('footer'))
