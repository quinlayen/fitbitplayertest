import React, { useState, useEffect } from "react";
import './App.css';
import { AuthState, onAuthUIStateChange, } from "@aws-amplify/ui-components"
import {AmplifyAuthenticator, AmplifySignUp, AmplifySignOut} from '@aws-amplify/ui-react';
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
                <div>Hello, {user.username}</div>
                <AmplifySignOut />
            </div>
        ) : ( <AmplifyAuthenticator />)
    
    // return(
    //     <div>
    //     authState === AuthState.SignedIn && user ? (
    //         <div className="App">
    //             <div>Hello, {user.username}</div>
    //             <AmplifySignOut />
    //         </div>
    //     ) : (
    //         <AmplifyAuthenticator />
    //     )
       
    //     </div>
      
    // )
    
  }


export default App;