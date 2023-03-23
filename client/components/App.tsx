import { useState } from 'react'
import request from 'superagent'

import { Set } from '../../common/Set'
import { Card } from '../../common/Card'

function App() {
  const [sets, setSets] = useState([] as Set[])

  const handleGetSets = async () => {
    try {
      const response = await request.get('/api/v1/sets')
      console.log(response.body)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFetchSets = async () => {
    try {
      const response = await request.get('/api/v1/sets/fetch')
      console.log(response.body)
    } catch (error) {
      console.log(error)
    }
  }
  
    const handleClearSets = async () => {
      try {
        const response = await request.get('/api/v1/sets/clear')
        console.log(response.body)
      } catch (error) {
        console.log(error)
      }
    }

    const handleGetCards = async () => {
      try {
        const response = await request.get('/api/v1/cards')
        console.log(response.body)
      }catch (error) {
        console.log(error)
      }
    }
  
    const handleFetchCards = async () => {
      try {
        const response = await request.get('/api/v1/cards/fetch')
        console.log(response.body)
      } catch (error) {
        console.log(error)
      }
    }
  
    const handleClearCards = async () => {
      try {
        const response = await request.get('/api/v1/cards/clear')
        console.log(response.body)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <>
      <div className="app">
        <h1>Sets:</h1>
        <ul>
          {sets.map((set) => (
            <li key={set.id}>{set.name}</li>
          ))}
        </ul>
        <button onClick={handleGetSets} >GET SETS FROM DB</button>
        <button onClick={handleFetchSets} >GET SETS FROM EXTERNAL API</button>
        <button onClick={handleClearSets} >CLEAR SETS FROM DB</button>

        <h1>Cards:</h1>
        <ul>
          {sets.map((set) => (
            <li key={set.id}>{set.name}</li>
          ))}
        </ul>
        <button onClick={handleGetCards} >GET CARDS FROM DB</button>
        <button onClick={handleFetchCards} >GET CARDS FROM EXTERNAL API</button>
        <button onClick={handleClearCards} >CLEAR CARDS FROM DB</button>
      </div>
    </>
  )
}

export default App
