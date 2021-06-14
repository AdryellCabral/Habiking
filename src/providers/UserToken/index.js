import { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(() => {
    const localToken = localStorage.getItem("@tokenKabit") || "";

    if (localToken !== "") {
      return JSON.parse(localToken);
    }

    return "";
  });

  const [userId, setUserId] = useState(() => {
    if (userToken !== "") {
      const decoded = jwt_decode(userToken);
      const { user_id } = decoded;
      return user_id;
    }

    return "";
  });

  return (
    <TokenContext.Provider value={{ userToken, userId }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
