import {
  Chat,
  FastForward,
  Pause,
  PlayArrow,
  Replay10,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useRef, useState } from "react";
import FastRewindIcon from "@mui/icons-material/FastRewind";

import Container from "@/components/Container";

interface FullScreenHeroProps {
  src?: string;
  alt?: string;
  priority?: boolean;
  bgColor?: string;
}

const FullScreenHeroWithImageSlider = ({
  src,
  priority,
  alt,
  bgColor,
}: FullScreenHeroProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Biến cờ theo dõi trạng thái video

  // Hàm toggle giữa play và pause
  const handleTogglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Hàm để tua nhanh video (tăng tốc độ phát)
  const handleFastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10; // Tua nhanh 10 giây
    }
  };

  // Hàm để quay lại video (quay lại 10 giây)
  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10; // Quay lại 10 giây
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        position: "relative",
        "& video": {
          width: "100%",
          height: "auto",
          objectFit: "cover",
        },
      }}
    >
      <video
        ref={videoRef}
        src={"/images/banner.mov"}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />

      {/* Menu Icons */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Container sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 2, 
              padding: "0 16px",
              borderRadius: "8px",
              maxWidth: "90vw", 
            }}
          >
            {/* Rewind Button */}
            <IconButton
              color="primary"
              onClick={handleRewind}
              sx={{
                backgroundColor: "#FFF", // Default background color
                "&:hover": {
                  backgroundColor: "#E74426", // Keep the same background color on hover
                  color: "#FFF",
                },
              }}
            >
              <FastRewindIcon />
            </IconButton>
            {/* Toggle Play/Pause Button */}
            <IconButton
              color="primary"
              onClick={handleTogglePlayPause}
              sx={{
                backgroundColor: "#FFF", // Default background color
                "&:hover": {
                  backgroundColor: "#E74426", // Keep the same background color on hover
                  color: "#FFF",
                },
              }}
            >
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            {/* Fast Forward Button */}
            <IconButton
              color="primary"
              onClick={handleFastForward}
              sx={{
                backgroundColor: "#FFF", // Default background color
                "&:hover": {
                  backgroundColor: "#E74426", // Keep the same background color on hover
                  color: "#FFF",
                },
              }}
            >
              <FastForward />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Chatbox Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "red",
          borderRadius: "50%",
          padding: 1,
          zIndex: 999,
        }}
      >
        <IconButton color="inherit">
          <Chat />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FullScreenHeroWithImageSlider;
