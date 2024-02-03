import styled from "styled-components";

const BackgroundNoneImage = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/Imgs/backgroundNone.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  @media screen and (min-width: 320px) and (max-width: 1439px) {
    background-size: contain;
  }
`;

export default BackgroundNoneImage;

//background-attachment: fixed;
//집단지성 칸을 터치하면 우리 인스타로 연결되도록하기
