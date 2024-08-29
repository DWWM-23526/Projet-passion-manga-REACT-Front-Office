import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import AppContext from "../../../core/contexts/app/AppContext";
import PropTypes from "prop-types";

const FavButton = ({ mangaId }) => {
  const { user, isAuthenticated } = useContext(AppContext);
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFavoriteClick = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    try {
      const userId = user?.id;
      const method = isFavorited ? "DELETE" : "POST";
      const response = await fetch(
        `http://api-passion-manga/api/users/manga/${userId}/${mangaId}`,
        {
          method: method,
          headers: {
            "Content-Type": "application/json",
            //TODO: ajouter le bearer token
          },
          body: JSON.stringify({ mangaId }),
        }
      );
      if (response) {
        setIsFavorited(!isFavorited);
      } else {
        console.error("Erreur ajout favoris");
      }
    } catch (error) {
      console.error("Erreur de connexion API: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant="link" onClick={handleFavoriteClick} disabled={loading}>
      {isFavorited ? (
        <FaHeart color="red" size={24} />
      ) : (
        <FaRegHeart color="black" size={24} />
      )}
    </Button>
  );
};

FavButton.propTypes = {
  mangaId: PropTypes.string.isRequired,
};

export default FavButton;
