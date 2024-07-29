import { Route, Routes } from "react-router-dom";

import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import UserScreen from "./screens/user/UserScreen";
import MangaScreen from "../pages/manga/MangaScreen";
import MangakaScreen from "../pages/mangaka/MangakaScreen";
import TagsScreen from "../pages/tags/TagsScreen";
import FavoriteScreen from "../pages/FavoriteScreen";
import PageNotFound from "../pages/PageNotFound";
import ShowMangaScreen from "../pages/manga/ShowMangaScreen";
import ShowMangakaScreen from "../pages/mangaka/ShowMangakaScreen";
import TagsMangaScreen from "../pages/tags/TagsMangaScreen";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/manga">
          <Route path="" element={<MangaScreen />} />
          <Route path=":idManga" element={<ShowMangaScreen />} />
        </Route>

        <Route path="/mangaka">
          <Route path="" element={<MangakaScreen />} />
          <Route path=":idMangaka" element={<ShowMangakaScreen />} />
        </Route>

        <Route path="/tags">
          <Route path="" element={<TagsScreen />} />
          <Route path=":idTag" element={<TagsMangaScreen />} />
        </Route>

        <Route path="/favorites" element={<FavoriteScreen />} />

        <Route path="/profil">
          <Route path="login" element={<LoginScreen />} />
          <Route path="logout" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path=":profileID" element={<UserScreen />} />
        </Route>

        <Route path="/page_not_found" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
