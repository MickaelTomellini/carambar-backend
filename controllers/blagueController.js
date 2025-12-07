import Joi from "joi";
import { CoreController } from "./coreController.js";
import { Blague } from "../models/index.js";
import { createBlagueSchema} from "../schemas/blagueSchemas.js";
import { literal } from "sequelize";

class BlagueController extends CoreController {

    findAll = async (req, res) => {
        try {
            const blagues = await Blague.findAll({ order: [["created_at", "DESC"]] });
            res.status(200).json(blagues);
        } catch (error) {
            console.error(error);
            this.render500(req, res);
        }
    };

    findOne = async (req, res) => {
        try {
            const blague = await Blague.findByPk(req.params.id);
            if (!blague) return this.render404(req, res);
            res.status(200).json(blague);
        } catch (error) {
            console.error(error);
            this.render500(req, res);
        }
    };

    create = async (req, res) => {
        try {
            const data = Joi.attempt(req.body, createBlagueSchema);
            const blague = await Blague.create(data);
            res.status(201).json(blague);
        } catch (error) {
            console.error(error);
            this.render500(req, res);
        }
    };

    random = async (req, res) => {
    try {
        const blague = await Blague.findOne({
            order: literal("RANDOM()"), 
        });
        if (!blague) return this.render404(req, res);

        res.status(200).json(blague);
    } catch (error) {
        console.error(error);
        this.render500(req, res);
    }
};
}

export default new BlagueController();
