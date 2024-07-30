import Grid from "../../shared/components/Grid/Grid";
import Cards from "../../shared/components/Card/Card";
import defaultImg from "../../../assets/img/naruto1.jpg";

const MangaScreen = () => {
  const getTitle = (item) => item.manga_name;
  const getId = (item) => item.Id_manga;

  return (
    <Grid
      fetchUrl="/manga"
      CardComponent={Cards}
      defaultImg={defaultImg}
      detailUrl="/manga"
      getTitle={getTitle}
      getId={getId}
    />
  );
};

export default MangaScreen;
