import { NETFLIX_LOGO, USER_ICON } from "../utils/urls"
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice"
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/urls";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // navigate to home page
    }).catch((error) => {
      // An error happened.
      // navigate to error page
      // navigate("/error");
    });
  };
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // update the store
          const {uid, email,displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
    });

    // Unsubscribe when component unbound
    return ()=> unsubscribe();
  },[]);

  const handleGptSearchClick = () => {
    // Toggle GPT search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img src={NETFLIX_LOGO} className="w-52 mx-auto md:mx-0" alt="logo"></img>
        {user && (<div className="flex text-white p-6 justify-between">
          {showGptSearch && <select className="p-2 m-2 bg-gray-500 text-white rounded-md" onChange={handleLanguageChange}>
            {SUPPORTED_LANG.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className="py-2 px-4 mx-4 bg-purple-600 text-white rounded-md" onClick={handleGptSearchClick}>{showGptSearch ? "HomePage" : "GPT Search"}</button>
          <img src={USER_ICON} alt="userIcon" className="hidden md:block w-10 h-10 "></img>
          <button className="font-bold" onClick={handleSignOut}>(Sign out)</button>
        </div>)}
    </div>
  )
}

export default Header