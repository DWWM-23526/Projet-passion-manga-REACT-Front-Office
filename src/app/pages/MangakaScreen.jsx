import Grid from "../shared/components/Grid/Grid";
import Cards from "../shared/components/Card/Card";
import defaultImg from "../../assets/img/hirohiko_araki.jpg";

const MangakaScreen = () => {
  const getTitle = (item) => `${item.first_name} ${item.last_name}`;
  const getId = (item) => item.Id_mangaka;

  return (
    <Grid
      fetchUrl="/mangaka"
      CardComponent={Cards}
      defaultImg={defaultImg}
      detailUrl="/details/mangaka"
      getTitle={getTitle}
      getId={getId}
    />
  );
};

export default MangakaScreen;
