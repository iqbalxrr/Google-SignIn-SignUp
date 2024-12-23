
import React, { useState } from 'react';

import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';


const Login = () => {

  const auth = getAuth(app);

  const [user , setUser] = useState(null)

//   console.log(app)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const HandalGoogleSingIn = () =>{

        // console.log(' handel clicked')
        signInWithPopup( auth , googleProvider)

        .then( result => {
            const loginusered = result.user;
            console.log(loginusered)
            setUser(loginusered);
            
        })
        .catch( error =>{

            console.error(error.message)
        })
    }
    
    //  github singin 
     
    const HandalGithubSingIn = ()=>{

        signInWithPopup( auth , githubProvider )

        .then( result =>{
            const githubLoginUser = result.user;
            setUser(githubLoginUser);
        })

    }
    const HandalSingOut = () =>{

        signOut(auth)

        .then( result =>{
             
            console.log(result)

        })
        .catch( error => {

            console.log(error);
        })

    }
    return (
        <div>

           <button onClick={HandalGoogleSingIn}>Google Login</button> 
           <button onClick={HandalSingOut}>Sing Out</button>
           <button onClick={HandalGithubSingIn}>github login</button>
          <div>
               <h1>user name :{} </h1>
          </div>
        </div>

    );
};

export default Login;