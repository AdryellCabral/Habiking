import {apiKabit} from "../../utils/apis"
import { createContext, useState, useContext, useEffect } from "react";

export const GroupsSubscriptionsContext = createContext([]);

export const GroupsSubscriptionsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzY5MjA1LCJqdGkiOiI3NGFkYjk5NmUyYzM0MzM2OWM2MzIwMjIyNjg1MjUyNCIsInVzZXJfaWQiOjY4MX0.CYFmrpSSwhVJo9FScQis_LJAxKE1vxTmeK-PfmOxbSM";
  useEffect(() => {
    apiKabit.get("/groups/subscriptions/", {
      Authorization: `Bearer ${token}`,
    }).then((response) => setGroups(response.data))
  });

  return (
    <GroupsSubscriptionsContext.Provider value={{groups}}>
      {children}
    </GroupsSubscriptionsContext.Provider>
  );
};

export const useGroupsSubscriptions = () =>
  useContext(GroupsSubscriptionsContext);
