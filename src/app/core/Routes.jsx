import { Route, Routes } from "react-router-dom";

import HomeScreen from "../screens/homePage/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import UserScreen from "./screens/user/UserScreen";
import MangaScreen from "../screens/manga/MangaScreen";
import MangakaScreen from "../screens/mangaka/MangakaScreen";
import TagsScreen from "../screens/tags/TagsScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import PageNotFound from "./screens/PageNotFound";
import ShowMangaScreen from "../screens/manga/ShowMangaScreen";
import ShowMangakaScreen from "../screens/mangaka/ShowMangakaScreen";
import TagsMangaScreen from "../screens/tags/TagsMangaScreen";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/manga">
          <Route path="" element={<MangaScreen />} />
          <Route path=":mangaTitle" element={<ShowMangaScreen />} />
        </Route>

        <Route path="/mangaka">
          <Route path="" element={<MangakaScreen />} />
          <Route path=":mangakaName" element={<ShowMangakaScreen />} />
        </Route>

        <Route path="/tags">
          <Route path="" element={<TagsScreen />} />
          <Route path=":tagName" element={<TagsMangaScreen />} />
        </Route>

        <Route path="/favorites" element={<FavoriteScreen />} />

        <Route path="/profil">
          <Route path="login" element={<LoginScreen />} />
          <Route path="logout" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path=":profileID" element={<UserScreen />} />
        </Route>

        <Route pathe="/page_not_found" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
