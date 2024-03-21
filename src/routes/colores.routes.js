import { Router} from "express";
import {borrarColor, crearColor, listarColores, obtenerColor} from "../controllers/colores.controllers.js"

const router = Router();

router.route('/colores').get(listarColores).post(crearColor)
router.route('/color/:id').get(obtenerColor).delete(borrarColor)
export default router;