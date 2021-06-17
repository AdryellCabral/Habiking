import { apiKabit } from "../../utils/apis";
import { createContext, useState, useContext, useEffect } from "react";
import { useToken } from "../UserToken";
import { useGroupsSubscriptions } from "../groupsSubscriptions";

export const UnsubscribedGroupsContext = createContext([]);

export const UnsubscribedGroupsProvider = ({ children }) => {
const { groups } = useGroupsSubscriptions();

  const [unsubscribedGroups, setUnsubscribedGroups] = useState([]);
  const [allGroups, setAllGroups] = useState([])
  const [URL, setURL] = useState("/groups/");
  const [nextPag, setNextPag] = useState("")
  const [previousPag, setPreviousPag] = useState("")

  const filterOnlyNoSubscriptions = () => {
    const newList = allGroups.filter((group) => {
      for (
        let groupSubscription = 0;
        groupSubscription < groups.length;
        groupSubscription++
      ) {
        if (groups[groupSubscription].id === group.id) {
          return false;
        }
      }
      return true;
    });
    
    setUnsubscribedGroups(newList)
  };

  const setStates = (response) => {
    setAllGroups(response.data.results)
    setPreviousPag(response.data.previous)
    setNextPag(response.data.next)
  }

  useEffect(() => {
    apiKabit
      .get(URL)
      .then((response) => setStates(response))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[URL,groups]);

  useEffect(() => {
    filterOnlyNoSubscriptions()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[allGroups])

  return (
    <UnsubscribedGroupsContext.Provider
      value={{unsubscribedGroups, setURL, nextPag, previousPag }}
    >
      {children}
    </UnsubscribedGroupsContext.Provider>
  );
};

export const useUnsubscribedGroups = () => useContext(UnsubscribedGroupsContext)