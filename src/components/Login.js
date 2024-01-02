import { useRef, useState } from "react"
import {LOGIN_IMAGE} from "../utils/urls"
import Header from "./Header"
import {checkValidation} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => { 
    const [isSignIn, setisSignIn] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);

    const toggleSignInForm = () => {
        setisSignIn(!isSignIn);
    }

    const email = useRef();
    const password = useRef();

    const handleClickButton = ()=>{
        const messg = checkValidation(email.current.value, password.current.value);
        seterrorMessage(messg);

        if(messg!==null) {
            // means either email or pass is not valid
            // so don't go ahead
            return ;
        }
        // Now sign in / sign up logic
        // first we will check form is sign in or sign up
        if(!isSignIn) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // console.log(user);
                // navigating the user to browse page
                // navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+" "+ errorMessage);
            });
        }else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
                // navigating the user to browse page
                // navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode+" "+errorMessage);
            });
        }

    }

    return (
        <div>
            <Header />                                  
            <div className="absolute">
                <img src={LOGIN_IMAGE} alt="logo" className="h-screen object-cover md:w-screen"></img>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
                <h1 className="font-semibold text-3xl py-auto ">{isSignIn ? "Sign in" : "Sign up"}</h1>
                {
                    !isSignIn && <input type="text" placeholder="Full Name" className="p-4 my-3 w-full bg-gray-800 rounded-md">
                    </input>
                }

                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-3 w-full bg-gray-800 rounded-md">
                </input>

                <input ref={password} type="text" placeholder="Password" className="p-4 my-3 w-full bg-gray-800 rounded-md">
                </input>

                <p className="text-red-600">{errorMessage}</p>

                <button className="p-4 my-6 bg-red-700 w-full rounded-md" onClick={handleClickButton}>
                    {isSignIn ? "Sign in" : "Sign up"}
                </button>
                
                <p className="p-2 text-slate-200 cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix ? Sign up now" : "Already registered ? Sign in"}</p>
            </form>
        </div>
    )   
}

export default Login