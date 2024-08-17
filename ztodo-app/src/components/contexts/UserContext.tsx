import { createContext, PropsWithChildren, useContext, useState } from "react";

type Props = PropsWithChildren;

// Create user context
export const UserContext = createContext<any | undefined>(undefined);

// User context provider
export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook to use UserContext
export const useUserContext = () => {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error('useUserContext must be used with a UserContext')
  }

  return user;
}