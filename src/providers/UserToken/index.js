import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [userToken, setUserToken] = useState("");
  const [username, setUsername]  = useState("");
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (userToken !== "") {
      const decoded = jwt_decode(userToken);
      const { user_id } = decoded;
      setUserId(user_id);
    }
  },[userToken]);

  return (
    <TokenContext.Provider value={{ userToken, setUserToken, userId, setUsername, username }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
