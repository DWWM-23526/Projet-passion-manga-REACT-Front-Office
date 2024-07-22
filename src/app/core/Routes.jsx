import { Route, Routes } from "react-router-dom";

import HomeScreen from "../screens/homePage/HomeScreen";
import LoginScreen from "../core/screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import UserScreen from "./screens/user/UserScreen";
import MangaScreen from "../screens/manga/MangaScreen";
import MangakaScreen from "../screens/mangaka/MangakaScreen";
import TagsScreen from "../screens/tags/TagsScreen";
import FavoriteScreen from "../screens/favorites/FavoriteScreen";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/manga" element={<MangaScreen />} />
        <Route path="/mangaka" element={<MangakaScreen />} />
        <Route path="/tags" element={<TagsScreen />} />
        <Route path="/favorites" element={<FavoriteScreen />} />

        <Route path="/profiles">
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="my-profile" element={<UserScreen />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
