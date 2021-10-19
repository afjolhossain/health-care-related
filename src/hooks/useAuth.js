import { useContext } from "react"
import { AuthContext } from "../contexts/AuthPovider"

const useAuth = () =>{
    return useContext(AuthContext);
}

export default useAuth;