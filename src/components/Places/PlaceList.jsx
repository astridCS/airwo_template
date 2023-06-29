//Dans ce composant, nous utilisons les hooks useState et useEffect de React
// pour gérer l'état du chargement (isLoading) et les lieux (places).
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Place from "./Place";
import Loader from "../Loader";

const PlaceList = ({ search }) => {
  // État pour gérer le chargement
  const [isLoading, setIsLoading] = useState(false);

  // État pour stocker les lieux
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // Appel à l'API pour récupérer les lieux
    fetch("/api/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        setIsLoading(false);
      });
  }, []);
   // Si le chargement est en cours, affiche le composant Loader
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {places
        .filter(
          (place) =>
            place.name.toLowerCase().includes(search.toLowerCase()) ||
            place.city.name.toLowerCase().includes(search.toLowerCase())
        )
        //le composant affiche une liste de lieux en utilisant le composant Place.
        // Les lieux sont filtrés en fonction du critère de recherche (search). 
        .map((place) => (
          <Place key={place.id} place={place} />
        ))}
    </div>
  );
};
 // Validation des types des props
PlaceList.propTypes = {
  search: PropTypes.string,
};

export default PlaceList;
