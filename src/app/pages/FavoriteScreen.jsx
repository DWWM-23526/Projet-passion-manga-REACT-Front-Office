import { useApp } from "../core/hooks/useApp";
import Grid from "../shared/components/Grid/Grid";
import defaultImg from "../../assets/img/naruto1.jpg";
import PageNotFound from "./error/PageNotFound";
import { lazy } from "react";
import delay from "../shared/utils/delay";

const CardsPreview = lazy(() =>
  delay(1000, import("../shared/components/Card/Card"))
);

const FavoriteScreen = () => {
  const { user, isAuthenticated } = useApp();

  if (!isAuthenticated) return <PageNotFound />;

  const fetchUrl = `/users/manga/${user.id}`;

  const getTitle = (item) => item.manga_name;
  const getId = (item) => item.id;
  const getImg = (item) => (item.img_manga ? item.img_manga : defaultImg);

  return (
    <Grid
      fetchUrl={fetchUrl}
      CardComponent={CardsPreview}
      getImg={getImg}
      detailUrl="/details/manga"
      getTitle={getTitle}
      getId={getId}
    />
  );
};

export default FavoriteScreen;
