import React, { useState, useEffect } from "react";
import './App.css';
import { AuthState, onAuthUIStateChange, } from "@aws-amplify/ui-components"
import {AmplifyAuthenticator, AmplifySignUp, AmplifySignOut, AmplifyGreetings} from '@aws-amplify/ui-react';
import { Auth } from "aws-amplify";



const App = () => {
    const [authState, setAuthState] = useState()
    const [user, setUser] = useState()

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


    return authState === AuthState.SignedIn && user ? (
            <div className="App">
                <AmplifyGreetings username={user.username} />
            </div>
        ) : ( <AmplifyAuthenticator />)
}


export default App;