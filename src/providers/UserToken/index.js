import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(() => {
    const localToken = localStorage.getItem("@tokenKabit") || "";
    return localToken;
  });

  const [userId, setUserId] = useState(() => {
    const decoded = jwt_decode(userToken);
    return decoded;
  });

  return (
    <TokenContext.Provider value={{ userToken, userId }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const { userToken } = useContext(TokenContext);
  return userToken;
};

export const useId = () => {
  const { userId } = useContext(TokenContext);
  return userId;
};
