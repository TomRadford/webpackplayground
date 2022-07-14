import { useState, useEffect } from 'react'
import axios from 'axios'

const useNotes = (url) => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get(url).then((res) => setNotes(res.data))
  }, [])

  return notes
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState([])
  console.log(BACKEND_URL)
  const notes = useNotes(BACKEND_URL)
  const handleClick = () => {
    setCounter(counter + 1)
    setValues(values.concat(counter))
  }
  return (
    <div className="container">
      HELLO WEBPACK! x<span onClick={handleClick}> {counter}</span>
      {(notes.length === 0) ? <div>Getting notes on server: {BACKEND_URL}</div> 
      : <div>{notes.length} notes on server on server: {BACKEND_URL}</div> }
    </div>
  )
}
export default App
