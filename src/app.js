import { createElement } from 'react'
import { render } from 'react-dom'
import App from './App.jsx'
import('./style.scss'/* Load css without link tag in html(https://stackoverflow.com/a/63811264) */)// .then(() => {
render(createElement(App), document.getElementById('app'))
