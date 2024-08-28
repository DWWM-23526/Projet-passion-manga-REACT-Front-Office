import Grid from "../shared/components/Grid/Grid";
import defaultImg from "../../assets/img/naruto1.jpg";
import { useParams } from "react-router-dom";
import { lazy } from "react";
import delay from "../shared/utils/delay";

const CardsPreview = lazy(() =>
  delay(1000, import("../shared/components/Card/Card"))
);

const TagsMangaScreen = () => {
  const { idTag } = useParams();
  const fetchUrl = `/tags/manga/${idTag}`;

  const getTitle = (item) => item.manga_name;
  const getId = (item) => item.id;

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

export default TagsMangaScreen;
