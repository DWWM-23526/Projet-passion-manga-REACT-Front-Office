import { Route, Routes } from "react-router-dom";

import HomeScreen from "../screens/homePage/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import UserScreen from "./screens/user/UserScreen";
import MangaScreen from "../screens/manga/MangaScreen";
import MangakaScreen from "../screens/mangaka/MangakaScreen";
import TagsScreen from "../screens/tags/TagsScreen";
import FavoriteScreen from "../screens/favorites/FavoriteScreen";
import PageNotFound from "./screens/PageNotFound";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/manga" element={<MangaScreen />} />
        <Route path="/mangaka" element={<MangakaScreen />} />
        <Route path="/tags" element={<TagsScreen />} />
        <Route path="/favorites" element={<FavoriteScreen />} />

        <Route path="/profile">
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
