import { createContext, useContext, useState, useEffect, type Dispatch, type SetStateAction } from 'react';
import { getCurrentUser } from '@/lib/appwrite';
import { type Models } from 'react-native-appwrite';


type globalContextTypes = {
  isLoading: boolean,
  isLoggedIn: boolean,
  user: null | Models.Document,
  setUser: Dispatch<SetStateAction<Models.Document | null>> | null;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>> | null;
};

const GlobalContext = createContext<globalContextTypes>({
  isLoading: false,
  isLoggedIn: false,
  user: null,
  setUser: null,
  setIsLoggedIn: null
});

export const useGlobalContext = () => useContext(GlobalContext);


const GlobalProvider = ({ children }: any) => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<null | Models.Document>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getCurrentUser()
      .then(res => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);



  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading
      }}
    >
      {children}
    </GlobalContext.Provider>

  );
};


export default GlobalProvider;