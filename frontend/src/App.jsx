import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      console.log(response)
      console.log(response.data)
      setJokes(response.data)
    })
    .catch((error) => {
      console.log("Error: ", error)
    })
  }, [])

  return (
    <>
     <h2>node-02-fullstack_basic</h2>
     <p>JOKES COUNT: {jokes.length}</p>
     {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>Joke {joke.id}: {joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
