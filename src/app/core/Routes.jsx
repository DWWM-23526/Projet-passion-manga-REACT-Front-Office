import { Route, Routes } from "react-router-dom";

import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import UserScreen from "./screens/user/UserScreen";
import MangaScreen from "../pages/MangaScreen";
import MangakaScreen from "../pages/MangakaScreen";
import TagsScreen from "../pages/TagsScreen";
import FavoriteScreen from "../pages/FavoriteScreen";
import PageNotFound from "../pages/error/PageNotFound";
import DetailsScreen from "../pages/DetailsScreen";
import TagsMangaScreen from "../pages/TagsMangaScreen";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/manga" element={<MangaScreen />} />
        <Route path="/mangaka" element={<MangakaScreen />} />

        <Route path="/details">
          <Route path=":type/:id" element={<DetailsScreen />} />
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
