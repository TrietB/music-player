import React from 'react'
import TrackList from './components/TrackList'
import { MusicPlayerProvider } from './contexts/MusicPlayerContext'

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
      <TrackList/>
      </div>
    </MusicPlayerProvider>
  )
}

export default App