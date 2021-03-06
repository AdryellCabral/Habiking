import { apiKabit } from "../../utils/apis";
import { createContext, useState, useContext, useEffect } from "react";
import { useToken } from "../UserToken";

export const GroupsSubscriptionsContext = createContext([]);

export const GroupsSubscriptionsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [editGroupId, setEditGroupId] = useState(0);

  const { userToken } = useToken();

  const newRequestGroupsSubscription = () => {
    if (userToken !== "") {
      apiKabit
        .get("/groups/subscriptions/", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => setGroups(response.data));
    }
  };

  useEffect(() => {
    newRequestGroupsSubscription();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  return (
    <GroupsSubscriptionsContext.Provider
      value={{
        groups,
        editGroupId,
        setEditGroupId,
        newRequestGroupsSubscription,
      }}
    >
      {children}
    </GroupsSubscriptionsContext.Provider>
  );
};

export const useGroupsSubscriptions = () =>
  useContext(GroupsSubscriptionsContext);
