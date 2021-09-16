import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from 'App'
import './index.css'
import store from 'store'

const rootElement = document.getElementById('root')

if (rootElement !== null && rootElement.hasChildNodes()) {
  hydrate(
    <Router basename="Assignment4-DW-SW">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    rootElement
  )
} else {
  render(
    <Router basename="Assignment4-DW-SW">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    rootElement
  )
}
