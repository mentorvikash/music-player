import { Box, Typography } from "@mui/material";

function MusicPlayer() {
  return (
    <>
    <Box className="flex flex-col">
      <Box className="w-full mt-0.2">
        <Typography className="text-center border bg-black text-white py-3" sx={{fontSize: '32px'}} variant="h3">Music Player</Typography>
      </Box>
      <Box className=" flex  w-full justify-center my-4" id="music-player" >
        <video className="w-4/5" src="./docker.mp4" autoPlay muted controls  />
      </Box>
      <Box className="flex" >
        <Typography variant="h4" className="font-semibold " sx={{fontSize:"24px"}}  >Audio Player</Typography>
      <audio src="./Moh.mp3" controls></audio>
      </Box>
    </Box>
    </>
  );
}

export default MusicPlayer;
