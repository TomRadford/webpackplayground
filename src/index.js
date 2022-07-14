import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'
import React from 'react'
import  ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PromisePolyfill from 'promise-polyfill'

if (!window.promise) {
    window.promise = {PromisePolyfill}
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)