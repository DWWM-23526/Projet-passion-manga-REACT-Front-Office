import Grid from "../shared/components/Grid/Grid";
import Cards from "../shared/components/Card/Card";
import defaultImg from "../../assets/img/naruto1.jpg";
import { useParams } from "react-router-dom";

const TagsMangaScreen = () => {
  const { idTag } = useParams();
  const fetchUrl = `/tags/manga/${idTag}`; 

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

export default TagsMangaScreen;
