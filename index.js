import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { sequelize, Blague } from "./models/index.js";
import blagueRoutes from "./routes/blagueRoutes.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import dotenv from "dotenv";
import seedBlagues from "./seed/seed_tables.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/blagues", blagueRoutes);

const swaggerDocument = YAML.load(path.join(__dirname, "swagger", "swagger.yaml"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API Carambar Blagues !");
});


async function startServer() {
  try {
   
    await sequelize.sync({ alter: true });
    console.log("DB synchronized ✅");

    
    const count = await Blague.count();
    if (count === 0) {
      console.log("Table vide, insertion des seeds...");
      await seedBlagues(); 
    } else {
      console.log("Table déjà remplie, seed non nécessaire.");
    }

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("DB sync error:", err);
  }
}

startServer();
