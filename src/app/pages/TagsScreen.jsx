import Grid from "../shared/components/Grid/Grid";
import defaultImg from "../../assets/img/genre-image.webp";
import { lazy } from "react";
import delay from "../shared/utils/delay";


const CardsPreview = lazy(() =>
  delay(1000, import("../shared/components/Card/Card"))
);

const TagsScreen = () => {
  const getTitle = (item) => item.tag_name;
  const getId = (item) => item.id;

  return (
      <Grid
        fetchUrl="/tags"
        CardComponent={CardsPreview}
        defaultImg={defaultImg}
        detailUrl="/tags"
        getTitle={getTitle}
        getId={getId}
      />
  );
};

export default TagsScreen;
