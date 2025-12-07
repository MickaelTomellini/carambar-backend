import { sequelize, Blague } from "../models/index.js";
import { blagues } from "./seed_tables.js";

console.log("🚧 Création des tables");

await sequelize.sync({ force: true });
console.log("✅ Tables créées avec succès");

console.log("🚧 Insertion des seeds...");
for (const b of blagues) {
  await Blague.create(b);
}
console.log("✅ Seeds insérés");

await sequelize.close();
console.log("Connexion fermée ✅");
