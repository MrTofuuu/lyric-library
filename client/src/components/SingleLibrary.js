import * as React from "react";
import {
  Box,
  List,
} from "@mui/material";


import SingleSong from './SingleSong';




export default function singleLibrary({ singleLibrary, loading, libraryId }) {
console.log(singleLibrary);
  const [songs, setSongs] = React.useState(singleLibrary.songs);
  const removeSong = async (songId) => {
    console.log('songState', songs[0]._id)
    try {
      const newSongList = songs.filter(song => song._id !== songId);
      console.log('newSongList', newSongList);
      setSongs(newSongList);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Box
      sx={{
        display: "flex;",
        flexDirection: "column;",
        color: "white;",
        alignItems: "center;",
        justifyContent: "center;",
      }}
    >
      <Box sx={{
        display: 'flex;',
        flexDirection: 'column;',
        alignItems: 'center;'
      }}>
        <Box
          sx={{
            marginBottom: "20px;",
            fontSize: "30px",
          }}
        >
          Current Playlist:
        </Box>
        <Box
          sx={{
            marginBottom: "20px;",
            fontSize: "30px",
            color: "#1DB954;",
          }}
        >
          {singleLibrary.name}
        </Box>
        <List
          sx={{
            display: "flex;",
            flexDirection: "column;",
            alignItems: "center;",
          }}
        >
          {songs.map((song) => {
            return (
              <SingleSong
                song={song}
                removeSong={removeSong}
                libraryId={libraryId}
              />)
          })}
        </List>
      </Box>
    </Box>

  );
}
