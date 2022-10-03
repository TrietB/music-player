import React, { useState } from "react";
import Track1 from '../musicData/Track1.mp3'
import Track2 from '../musicData/Track2.mp3'
import Track3 from '../musicData/Track3.mp3'

const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Gold",
        file: Track1,
      },
      {
        name: "Milk Shake",
        file: Track2,
      },
      {
        name: "Electric Guitar",
        file: Track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }

console.log(defaultValues)

const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider, defaultValues };
