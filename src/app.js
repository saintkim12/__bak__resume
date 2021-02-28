import { createElement } from 'react'
import { render } from 'react-dom'
import App from './App.jsx'
import './style.scss'

render(createElement(App), document.getElementById('app'))
