import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'

const App = () => {
  return (
    <div className="App">
      <p>flixter</p>
      <MovieList />
    </div>
  )
}

export default App
