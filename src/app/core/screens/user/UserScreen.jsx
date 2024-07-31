import PageNotFound from "../../../pages/error/PageNotFound";
import { useApp } from "../../hooks/useApp";

const UserScreen = () => {
  const { user, setTitle, isAuthenticated } = useApp();

  if (!isAuthenticated) return <PageNotFound />;

  setTitle(user.name);

  return <></>;
};

export default UserScreen;
