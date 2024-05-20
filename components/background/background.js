import styled from "styled-components";
import { keyframes } from "styled-components";
import HeartImage from "./heart-image.png";
import Image from 'next/image';


// hot reloading is sometimes not working - ensure you restart dev server if changes not immediate
export default function Background() {
  return (
    <>
      <Hearts>
        <OneHeart></OneHeart>
        <OneHeart></OneHeart>
        <OneHeart></OneHeart>
        <OneHeart></OneHeart>
        <OneHeart></OneHeart>
        <OneHeart></OneHeart>
        <OneHeart></OneHeart>
        <OneHeart></OneHeart>
        <OneHeart></OneHeart>
        <OneHeart></OneHeart>
        <OneHeart></OneHeart>
      </Hearts>
    </>
  );
}

const heartAnimation = keyframes`
0% {
  transform: translateY(0px);
  opacity: 1;
}
50% {
  opacity: 0;
}
100% {
  transform: translateY(-4000px) rotate(600deg);
  opacity: 0;
}
`;

const Hearts = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 80%;
  isolation: isolate;
`;

const OneHeart = styled(Image).attrs((props) => ({
  src: HeartImage,
  alt: "Heart Image"
}))`
  position: absolute;
  list-style: none;
  display: block;
  width: 80px;
  height: 80px;
  background-size: contain;
  bottom: -220px;
  animation: ${heartAnimation} 25s infinite;
  transition-timing-function: linear;

  &:nth-child(1) {
    left: 10%;
  }

  &:nth-child(2) {
    left: 20%;
    animation-delay: 3s;
    animation-duration: 17s;
  }

  &:nth-child(3) {
    left: 25%;
    animation-delay: 4s;
  }

  &:nth-child(4) {
    left: 40%;
    width: 50px;
    height: 50px;
    animation-duration: 22s;
  }

  &:nth-child(5) {
    left: 70%;
  }

  &:nth-child(6) {
    left: 80%;
    width: 120px;
    height: 120px;
    animation-delay: 3s;
  }

  &:nth-child(7) {
    left: 32%;
    width: 160px;
    height: 160px;
    animation-delay: 7s;
  }

  &:nth-child(8) {
    left: 55%;
    width: 40px;
    height: 40px;
    animation-delay: 15s;
    animation-duration: 40s;
  }

  &:nth-child(9) {
    left: 15%;
    width: 250px;
    height: 250px;
    animation-delay: 2s;
    animation-duration: 40s;
  }

  &:nth-child(10) {
    left: 90%;
    width: 200px;
    height: 200px;
    animation-delay: 11s;
  }

  &:nth-child(11) {
    left: 85%;
    width: 250px;
    height: 250px;
    animation-delay: 2s;
    animation-duration: 40s;
  }
`;
