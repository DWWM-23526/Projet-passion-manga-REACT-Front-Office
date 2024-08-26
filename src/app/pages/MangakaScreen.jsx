import { lazy, useState } from "react";

import Searchbar from "../shared/components/Searchbar/SearchBar";
import Grid from "../shared/components/Grid/Grid";
import defaultImg from "../../assets/img/hirohiko_araki.jpg";
import delay from "../shared/utils/delay";

const CardsPreview = lazy(() => delay(1000, import("../shared/components/Card/Card")));

const MangakaScreen = () => {
  const getTitle = (item) => `${item.first_name} ${item.last_name}`;
  const getId = (item) => item.id;

  const [searchTerm, setSearchTerm] = useState("");


  return (
    <>
      <Searchbar onSearch={setSearchTerm}/>
      <Grid
        searchTerm={searchTerm}
        fetchUrl="/mangaka"
        CardComponent={CardsPreview}
        defaultImg={defaultImg}
        detailUrl="/details/mangaka"
        getTitle={getTitle}
        getId={getId}
      />
    </>
  );
};

export default MangakaScreen;
