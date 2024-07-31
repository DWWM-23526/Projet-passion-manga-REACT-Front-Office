import { useApp } from "../core/hooks/useApp";
import Grid from "../shared/components/Grid/Grid";
import defaultImg from "../../assets/img/naruto1.jpg";
import PageNotFound from "./PageNotFound";
import { lazy } from "react";
import delay from "../shared/utils/delay";

const CardsPreview = lazy(() =>
  delay(1000, import("../shared/components/Card/Card"))
);

const FavoriteScreen = () => {
  const { user, isAuthenticated } = useApp();

  if (!isAuthenticated) return <PageNotFound />;

  const fetchUrl = `/users/manga/${user.Id_user}`;

  const getTitle = (item) => item.manga_name;
  const getId = (item) => item.Id_manga;

  return (
    <Grid
      fetchUrl={fetchUrl}
      CardComponent={CardsPreview}
      defaultImg={defaultImg}
      detailUrl="/details/manga"
      getTitle={getTitle}
      getId={getId}
    />
  );
};

export default FavoriteScreen;
