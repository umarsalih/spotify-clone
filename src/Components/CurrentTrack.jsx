import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useStateProvider} from '../Utilities/StateProvicer';
import axios from 'axios';
import { reducerCases } from '../Utilities/Constants';

function CurrentTrack() {

    const [{token, currentlyPlaying}, dispatch] = useStateProvider();

    useEffect(() => {
        const getCurrentTrack = async() => {
            try {
                const response = await axios.get(
                    "https://api.spotify.com/v1/me/player/currently-playing",
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                      },
                    }
                  );

                //   console.log(response);
                  
                if(response.data !== "") {
                    const {item} = response.data;
                    const currentlyPlaying = {
                        id: item.id,
                        name: item.name,
                        artists: item.artists.map((artist) => artist.name),
                        image: item.album.images[2].url,
                    }

                    dispatch({type: reducerCases.SET_PLAYING, currentlyPlaying});
                }

                

            } catch (error) {
                console.error("Error fetching playlists:", error);
            }
        };
        getCurrentTrack();
    }, [token, dispatch])

  return (
    <Container>
        {
            currentlyPlaying && (
                <div className='track'>
                    <div className='track_image'>
                        <img src={currentlyPlaying.image} alt="currently playing"/>
                    </div>
                    <div className='track_info'>
                        <h4>{currentlyPlaying.name}</h4>
                        <h6>{currentlyPlaying.artists.join(", ")}</h6>
                    </div>
                </div>
            )
        }
    </Container>
  )
}

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &_image {
    }
    .track_info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      h4 {
        color: white;
      }
      h6 {
        color: #b3b3b3;
      }
    }
  } 
`;


export default CurrentTrack 