import { sequelize, Blague } from "../models/index.js";
import seedBlagues from "./seed_tables.js";

async function resetDatabase() {
  try {
    console.log("🚧 Connexion à la base de données...");
    await sequelize.authenticate();
    console.log("✅ Connexion réussie");

    console.log("🚧 Création des tables (reset complet)...");
    await sequelize.sync({ force: true });
    console.log("✅ Tables créées avec succès");

    console.log("🚧 Insertion des seeds...");
    await seedBlagues();
    
    console.log("✅ Base de données réinitialisée et seedée !");
    
    await sequelize.close();
    console.log("🔒 Connexion fermée");
  } catch (error) {
    console.error("❌ Erreur lors du reset :", error);
  }
}

resetDatabase();
