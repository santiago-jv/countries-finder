import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
     }

    100% {
        transform: rotate(360deg);
    }

`
const Spinner = styled.div`
  border: 4px solid ${props=>props.theme.text};
  border-left-color: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin:3rem auto;

`

export {
    Spinner
}