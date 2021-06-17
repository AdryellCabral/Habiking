import { TokenProvider } from "./UserToken";
import { GroupsSubscriptionsProvider } from "./groupsSubscriptions";
import { UnsubscribedGroupsProvider } from "./unsubscribedGroups";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <GroupsSubscriptionsProvider>
        <UnsubscribedGroupsProvider>{children}</UnsubscribedGroupsProvider>
      </GroupsSubscriptionsProvider>
    </TokenProvider>
  );
};

export default Providers;
