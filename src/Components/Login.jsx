import React from 'react'
import styled from "styled-components";

export default function Login() {
    const handleClick = () => {
        const CLIENT_ID = "a58d835c0c3c495c966a3d2792edd4fa";
        const REDIRECT_URL = "http://localhost:3000/";
        const API_URL = "https://accounts.spotify.com/authorize";
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-read-playback-position',
            'user-top-read',  
        ];

        window.location.href = `${API_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scope.join(
            " "
        )}&response_type=token&show_daialog=true`;
    }
    return (
        <Container>
            <img
                src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'
                alt='spotify'/>
            <button onClick={handleClick}>Connect Spotify</button>
        </Container>
    )
}

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1db954;
    gap: 5rem;
    img {
        height: 20vh;
    }
    button{
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background-color: black; 
        color: #49f585;
        font-size: 1.1rem;
        cursor: pointer;
    }
`;
