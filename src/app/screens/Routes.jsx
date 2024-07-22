import { Route, Routes } from "react-router-dom";

import HomeScreen from "./homePage/HomeScreen";
import LoginScreen from "../core/screens/login/LoginScreen";
import RegisterScreen from "../core/screens/register/RegisterScreen";
import UserScreen from "../core/screens/user/UserScreen";
import MangaScreen from "./manga/MangaScreen";
import MangakaScreen from "./mangaka/MangakaScreen";
import TagsScreen from "./tags/TagsScreen";
import FavoriteScreen from "./favorites/FavoriteScreen";
import PageNotFound from "../core/screens/PageNotFound";

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
          <Route path=":profileID" element={<UserScreen />} />
        </Route>

        <Route pathe="/page_not_found" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
