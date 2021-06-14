import { TokenProvider } from "./UserToken";
import { GroupsSubscriptionsProvider } from "./groupsSubscriptions";

const Providers = ({ children }) => {
  return <TokenProvider>{children}</TokenProvider>;
};

export default Providers;
