import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/lib";

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>()
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if(authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })
    return () => unsubscribe()
}, []);

return {user, isLoading}
}