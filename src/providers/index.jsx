import { TokenProvider } from "./UserToken";
import { GroupsSubscriptionsProvider } from "./groupsSubscriptions";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <GroupsSubscriptionsProvider>{children}</GroupsSubscriptionsProvider>
    </TokenProvider>
  );
};

export default Providers;
