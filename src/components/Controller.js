import { Box, Button, Typography } from '@mui/material'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import useMusicPlayer from '../hooks/useMusicPlayer';
import React from 'react'


const styled = 
{
    display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', border: 'solid black 1px', mb: 2, ml:1,mr:1
}

function Controller() {
    const {togglePlay, playPreviousTrack, playNextTrack, currentTrackName, isPlaying} = useMusicPlayer()

  return (
    <Box sx={styled}>
        <Typography>Song Name: {currentTrackName}</Typography>
        <Box>
        <Button onClick={playPreviousTrack}>
        <SkipPreviousIcon/>
        </Button>
        <Button onClick={togglePlay}>
            {isPlaying? (<PauseIcon/>):(<PlayArrowIcon/>)}
        </Button>
        <Button onClick={playNextTrack}>
        <SkipNextIcon/>
        </Button>
        </Box>
    </Box>
  )
}

export default Controller