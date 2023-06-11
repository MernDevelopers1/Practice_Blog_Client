import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"

const useUser = () => {
  const [user,setuser] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(getAuth(),user=>{
        setuser(user);
        setIsLoading(false);
    });
    return unSubscribe;
  },[]);
  return {user,isLoading};
}

export default useUser;
