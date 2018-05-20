import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './app'
import { reducerCreator }   from './reducerCreator'

import reducers from './reducers'

const reducerEnhancer = (typeof window != 'undefined' && window.devToolsExtension)? window.devToolsExtension() : (f => f)
const initialReducer = reducerCreator({}, reducers)

function onLoad () {
  const store = createStore(initialReducer, window._state, reducerEnhancer)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('main-content')
  )
}

window.onload = onLoad