import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'

const App = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Flixter 🍿</h1>
      </header>
      <MovieList />
      <footer className='App-footer'>
        <p>github: liliana-cc</p>
      </footer>
    </div>
  )
}

export default App
