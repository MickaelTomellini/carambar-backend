import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../database.sqlite"),
  logging: false, 
  define: {
    createdAt: "created_at", 
    updatedAt: "updated_at",
    underscored: true,   
  },
});

try {
  await sequelize.authenticate();
  console.log("Connexion à la base SQLite réussie ✅");
} catch (error) {
  console.error("Impossible de se connecter à la base SQLite ❌", error);
}
