import styled from "styled-components";
import Mask from "./Mask";

const Container = styled.section`
  position: relative;
  background-color: black;
  height: calc(100vh - 3.25rem);
  width: 100%;
  overflow: hidden;
  .container {
    position: relative;
    z-index: 2;
  }
`;

export default function Hero() {
  return (
    <Container>
      <Mask />
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="https://youtu.be/8-7jkW0ReGQ" type="video/mp4" />
      </video>
      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <h1 className="display-3">Video Header</h1>
            <p className="lead mb-0">With HTML5 Video and Bootstrap 4</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
