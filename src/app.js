import { createElement } from 'react'
import { render } from 'react-dom'
import Section from './Section'
import Header from './Header'
import Footer from './Footer'

render(createElement(Header), document.getElementById('header'))
render(createElement(Section), document.getElementById('main'))
render(createElement(Footer), document.getElementById('footer'))
