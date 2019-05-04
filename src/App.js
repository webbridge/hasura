import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  handleFunction = () => {
    fetch('https://upbeat-euler-c4c81e.netlify.com/.netlify/functions/hello').then(res => {
      console.log(res)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={this.handleFunction}>lambda function</button>
      </header>
    </div>
  )
}

export default App
