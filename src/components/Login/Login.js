import React from 'react';
import { useState, useContext, useRef } from "react";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebase-config";
import "./login.css";
import Fondo from "../../images/login.jpg";
import { UserContext } from "./UserProvider";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef1 = useRef(null);
  const passwordRef1 = useRef(null);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }


  



  const signUp = e => {
    e.preventDefault();
    const auth = getAuth();
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert(user.email)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error)
          alert(errorCode)
          alert(errorMessage)
          // ..
  });
}
  const signIn = e => {

    e.preventDefault();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, emailRef1.current.value, passwordRef1.current.value)
        .then((userCredential) => {
          // Signed in
          
          const user = userCredential.user;
          alert(user.email)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error)
          alert(errorCode)
          alert(errorMessage)
        });
}



  return (

    <div className='todo'>
      <div className='izq_log'>
        <img src={Fondo}></img>
      </div>
      <div className='der_log'>
        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true"></input>

          <div class="signup">
            <form action="">
              <div className='etiqueta'><label for="chk" aria-hidden="true">Sign up</label></div>
              <input type="email" name="email" placeholder="Ingrese email" ref={emailRef}/>
              <input type="password" name="password" placeholder="Contraseña" required="" ref={passwordRef}/>
              <button className='registro'  onClick={signUp}>Register</button>
            </form>
          </div>
          <div class="login">
            <form action="">
              <div className='etiqueta'><label for="chk" aria-hidden="true">Login</label></div>
               <input type="email" name="email" placeholder="Ingrese email" ref={emailRef1}/>
              <input type="password" name="password" placeholder="Contraseña" required="" ref={passwordRef1}/>
              <button className='registro' onClick={signIn}>Login</button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
  

}
export default Login;