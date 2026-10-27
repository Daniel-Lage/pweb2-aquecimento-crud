import { CandyRepository } from "../repositories/candy.repository.js";
import { CandyService } from "../services/candy.service.js";
import { CandyController } from "../controllers/candy.controller.js";

import { Router } from "express";
import { validateCreateCandy } from "../middlewares/validate.create.candy.middleware.js";

const repository = new CandyRepository();
const service = new CandyService(repository);
const controller = new CandyController(service);

const router = new Router();

router.post("/", validateCreateCandy, controller.create);
router.get("/", controller.list);
router.get("/novo", controller.form);
router.get("/:id", controller.details);
router.post("/:id", controller.edit);
router.post("/:id/excluir", controller.delete);

export default router;
