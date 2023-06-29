import React, { createContext, useContext } from "react";
import { NotificationManager } from "react-notifications";

// Créez le contexte pour le fournisseur de messages
const NotificationContext = createContext();

// Composant de fournisseur de messages
function NotificationProvider({ children }) {
  // Fonction pour afficher une notification de succès
  const showSuccessNotification = (message) => {
    NotificationManager.success(message, "Succès", 3000);
  };

  // Fonction pour afficher une notification d'erreur
  const showErrorNotification = (message) => {
    NotificationManager.error(message, "Erreur", 3000);
  };

  return (
    <NotificationContext.Provider
      value={{ showSuccessNotification, showErrorNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

// Hook personnalisé pour utiliser le fournisseur de messages
function useNotification() {
  return useContext(NotificationContext);
}

export { NotificationProvider, useNotification };
