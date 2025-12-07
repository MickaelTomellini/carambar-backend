import { sequelize } from "./sequelize.js";
import { Blague } from "./blague.js";

export { sequelize, Blague };

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie.");
    await sequelize.sync();
    console.log("Modèles synchronisés avec la base de données.");
  } catch (error) {
    console.error("Impossible de se connecter à la base de données :", error);
  }
};
