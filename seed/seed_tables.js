// seeds/blagues.seed.js
import { sequelize, Blague } from "../models/index.js";

export const blagues = [
  { question: "Quelle est la femelle du hamster ?", reponse: "L’Amsterdam" },
  { question: "Que dit un oignon quand il se cogne ?", reponse: "Aïe" },
  { question: "Quel est l'animal le plus heureux ?", reponse: "Le hibou, parce que sa femme est chouette." },
  { question: "Pourquoi le football c'est rigolo ?", reponse: "Parce que Thierry en rit" },
  { question: "Quel est le sport le plus fruité ?", reponse: "La boxe, parce que tu te prends des pêches..." },
  { question: "Que se fait un Schtroumpf quand il tombe ?", reponse: "Un Bleu" },
  { question: "Quel est le comble pour un marin ?", reponse: "Avoir le nez qui coule" },
  { question: "Qu'est ce que les enfants usent le plus à l'école ?", reponse: "Le professeur" },
  { question: "Quel est le sport le plus silencieux ?", reponse: "Le para-chuuuut" },
  { question: "Quel est le comble pour un joueur de bowling ?", reponse: "Perdre la boule" }
];


const seedBlagues = async () => {
  try {
    console.log("🚧 Insertion des données de seed dans les tables");
    
    await Promise.all(blagues.map(b => Blague.create(b)));

    console.log("✅ Insertion des données de seed terminée");
  } catch (error) {
    console.error("❌ Erreur lors du seed :", error);
  } finally {
    await sequelize.close(); 
  }
};

seedBlagues();
