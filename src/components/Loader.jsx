import React from "react";
import { PuffLoader } from "react-spinners";
// J utilise Loader avec  le spinner de chargement PuffLoader de la bibliothèque 
// react-spinners pour créer un effet de chargement visuel.
const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <PuffLoader size={100} color="green" />
      Loading...
    </div>
  );
};

export default Loader;
