import React, {useEffect} from 'react'
import Login from './Components/Login'
import {useStateProvider} from "./Utilities/StateProvicer";
import { reducerCases } from './Utilities/Constants';
import Spotify from './Components/Spotify';

export default function App() {

  const [{token},dispatch] = useStateProvider();

  useEffect(() => {
    //each time the page is loaded.
    const hash = window.location.hash;
    
    if(hash) {
      //splitting the hash values and grabbing the first value from the array which is the token.
      const token = hash.substring(1).split("&")[0].split("=")[1];
      //console.log(token);
 
      dispatch({type:reducerCases.SET_TOKEN, token}); 
    } 

  }, [token, dispatch]);

  return (
    <div>
    {
      token ? <Spotify/> : <Login />
    }
    </div>
  )
}
