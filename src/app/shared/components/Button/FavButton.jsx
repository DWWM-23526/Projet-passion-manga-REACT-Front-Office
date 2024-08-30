import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import AppContext from "../../../core/contexts/app/AppContext";
import PropTypes from "prop-types";
import BaseService from "../../../core/service/BaseService";
import ModalNotification from "../Modal/ModalNotification";

const FavButton = ({ mangaId }) => {
  const { user, isAuthenticated } = useContext(AppContext);
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    checkFavorite();
  });

  const baseService = new BaseService();
  const token = baseService._getAuthToken();

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
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ mangaId }),
        }
      );
      if (response.ok) {
        const successMessage = isFavorited
          ? "Bien supprimé des favoris"
          : "Bien ajouté aux favoris";
        setIsFavorited(!isFavorited);
        setModalMessage(successMessage);
        setShowModal(true);
      } else {
        console.error("Erreur ajout favoris");
      }
    } catch (error) {
      console.error("Erreur de connexion API: ", error);
    } finally {
      setLoading(false);
    }
  };

  const checkFavorite = async () => {
    try {
      const userId = user?.id;
      const response = await fetch(
        `http://api-passion-manga/api/manga/user/${mangaId}/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.data === true) {
          setIsFavorited(true);
        } else {
          setIsFavorited(false);
        }
      } else {
        console.error("Erreur lors de la récupération des favoris");
      }
    } catch (error) {
      console.error("Erreur de connexion API: ", error);
    }
  };

  return (
    <>
      <Button variant="link" onClick={handleFavoriteClick} disabled={loading}>
        {isFavorited ? (
          <FaHeart color="red" size={24} />
        ) : (
          <FaRegHeart color="black" size={24} />
        )}
      </Button>

      <ModalNotification
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Favoris"
        message={modalMessage}
      />
    </>
  );
};

FavButton.propTypes = {
  mangaId: PropTypes.string.isRequired,
};

export default FavButton;
