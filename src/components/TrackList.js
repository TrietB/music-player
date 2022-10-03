import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import React from 'react'
import useMusicPlayer from '../hooks/useMusicPlayer'
import Controller from './Controller';

function TrackList() {
    const { trackList, playTrack} = useMusicPlayer()
  return (
    <>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', border: 'solid black' }}>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)
        <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>playTrack(index)}>
                <PauseCircleIcon sx={{mr:2}}/>
              <ListItemText primary={track.name} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      ))}
        <Controller/>
        </Box>
    </>
  )
}

export default TrackList