import Grid from "../shared/components/Grid/Grid";
import Cards from "../shared/components/Card/Card";
import defaultImg from "../../assets/img/genre-image.webp";

const TagsScreen = () => {
  const getTitle = (item) => item.tag_name;
  const getId = (item) => item.Id_tag;

  return (
    <Grid
      fetchUrl="/tags"
      CardComponent={Cards}
      defaultImg={defaultImg}
      detailUrl="/tags"
      getTitle={getTitle}
      getId={getId}
    />
  );
};

export default TagsScreen;
