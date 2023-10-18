import React from 'react'
import styled from 'styled-components';
import {useStateProvider} from '../Utilities/StateProvicer';
import axios from 'axios';

function Volume() {

  const [{token}] = useStateProvider()

  const setVolume = async e => {
    await axios.put(
      `https://api.spotify.com/v1/me/player/volume`, {},
      {
        params: {
          volume_percent: parseInt(e.target.value)
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <Container>
        <input type='range' min={0} max={100} onMouseUp={(e=>setVolume(e))}/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  input[type="range"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 10px 0;
    width: 15rem;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px; 
    cursor: pointer;
    background: #888; 
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px; 
    height: 16px; 
    background: #fff; 
    border: 2px solid #888; 
    border-radius: 50%; 
    margin-top: -6px; 
    cursor: pointer;
  }
`;

export default Volume