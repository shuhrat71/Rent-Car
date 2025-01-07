import carAnimation from "./carAnimation.mp4";
import bmw from "../Pages/img/bmw.png";
import { useState, useRef } from "react";
import { Container, Typography } from "@mui/material";
type Props = {};

const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="background-container">
      {videoRef && (
        <video
          className="background-video"
          autoPlay
          muted
          onEnded={handleVideoEnd}
        >
          <source src={carAnimation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="content">
          <Typography variant="h1">
            Zamonaviy avtomobillarni ijaraga oling va sayohatingizni yanada
            tezkor va xavfsiz qiling.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default BackgroundVideo;
