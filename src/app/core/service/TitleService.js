import { useLocation } from "react-router-dom";
import { useApp } from "../hooks/useApp";
import { useEffect } from "react";

const RouteTitleUpdater = () => {
  const { pathname } = useLocation();
  const { setTitle } = useApp();

  useEffect(() => {
    const routeTitles = {
      "/": "PASSION MANGAS",
      "/manga": "MANGAS",
      "/mangaka": "MANGAKAS",
      "/tags": "GENRES",
      "/profil/login": "CONNEXION",
      "/profil/register": "INSCRIPTION",
      "/favorites": "FAVORIS",
      "/page_not_found": "PAGE NOT FOUND",
    };

    const title = routeTitles[pathname];
    setTitle(title);
  }, [pathname, setTitle]);

  return null;
};

export default RouteTitleUpdater;

