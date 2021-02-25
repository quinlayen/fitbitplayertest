import React, { useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { AuthState, onAuthUIStateChange, } from "@aws-amplify/ui-components"
import useFluxibleStore from 'react-fluxible/lib/useFluxibleStore';
import {AmplifyAuthenticator, AmplifySignUp, AmplifySignOut, AmplifyGreetings} from '@aws-amplify/ui-react';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';



const mapStates = ({authUser}) => {
  return {authUser}
}

const App = () => {
    const {authUser} = useFluxibleStore(mapStates);
    const [authState, setAuthState] = useState()
    const [user, setUser] = useState()

    console.log(`authUser: ${authUser}`)

    useEffect(()=>{
        return onAuthUIStateChange((nextAuthState, authData)=>{
            if(nextAuthState === AuthState.SignedIn){
                setAuthState(nextAuthState);
                setUser(authData);
                console.log(("User successfully signed in!"));
                console.log(`User data: ${authData}`)
            }
        })
    }, [])

    return(
      <>
        <AppBar position="fixed">
          <Toolbar>
            <Typography>Health Island</Typography>
          </Toolbar>
        </AppBar>
      </>
    )
    // return authState === AuthState.SignedIn && user ? (
    //         <div className="App">
    //             <AmplifyGreetings username={user.username} />
    //         </div>
    //     ) : ( <AmplifyAuthenticator />)
}


export default React.memo(App);