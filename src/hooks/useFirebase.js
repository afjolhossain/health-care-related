import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import {useState ,useEffect} from 'react'
import InilializeAuthentication from "../pages/Login/Firebase/Firebase.init";


InilializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [isLoading, setisLoading] = useState(true);

    const auth = getAuth();

    const SignInUseGoogle = () =>{
        setisLoading(true)
           const Googleprovider = new GoogleAuthProvider();
          signInWithPopup(auth, Googleprovider)
           .then(result =>{
            setuser(result.user);
            })
            .finally(()=>setisLoading(false));
    }
useEffect(() =>{
 const unsubscribed = onAuthStateChanged(auth, user =>{
        if(user){
            setuser(user);
        }
        else{
           setuser({})
        }
        setisLoading(false);
    });
    return()=>unsubscribed;
}, [auth]);

const logOut = () =>{
    signOut(auth)
    .then(()=>{})
    .finally(()=>setisLoading(false))
}

    return{
        user,
        isLoading,
        SignInUseGoogle,
        logOut,
    }
}
export default useFirebase;