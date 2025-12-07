import express from "express";
import BlagueController from "../controllers/blagueController.js";

const router = express.Router();

router.get("/random", BlagueController.random);
router.get("/lesblagues", BlagueController.findAll);
router.get("/:id", BlagueController.findOne);
router.post("/ajouterblague", BlagueController.create);

export default router;
