import { useApp } from "../core/hooks/useApp";
import Grid from "../shared/components/Grid/Grid";
import Cards from "../shared/components/Card/Card";
import defaultImg from "../../assets/img/naruto1.jpg";
import PageNotFound from "./error/PageNotFound";

const FavoriteScreen = () => {
  const { user, isAuthenticated } = useApp();

  if (!isAuthenticated) return <PageNotFound />;

  const fetchUrl = `/users/manga/${user.Id_user}`;

  const getTitle = (item) => item.manga_name;
  const getId = (item) => item.Id_manga;

  return (
    <Grid
      fetchUrl={fetchUrl}
      CardComponent={Cards}
      defaultImg={defaultImg}
      detailUrl="/details/manga"
      getTitle={getTitle}
      getId={getId}
    />
  );
};

export default FavoriteScreen;
