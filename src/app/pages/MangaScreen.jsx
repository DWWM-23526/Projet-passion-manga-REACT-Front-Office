import { lazy, useState } from "react";

import Searchbar from "../shared/components/Searchbar/SearchBar";
import Grid from "../shared/components/Grid/Grid";
import defaultImg from "../../assets/img/naruto1.jpg";
import delay from "../shared/utils/delay";

const CardsPreview = lazy(() => delay(1000, import("../shared/components/Card/Card")));

const MangaScreen = () => {
  const getTitle = (item) => item.manga_name;
  const getId = (item) => item.id;

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Searchbar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Grid
        searchTerm={searchTerm}
        fetchUrl="/manga"
        CardComponent={CardsPreview}
        defaultImg={defaultImg}
        detailUrl="/details/manga"
        getTitle={getTitle}
        getId={getId}
      />
    </>
  );
};

export default MangaScreen;
