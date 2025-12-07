import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";

export class Blague extends Model {}

Blague.init(
  {
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reponse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Blague",
    tableName: "blagues",
    timestamps: true,
  }
);
