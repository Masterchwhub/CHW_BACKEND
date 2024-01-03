import { Router } from "express";
import { byeWorld } from "../../controllers/bye.controller";
import {  validateToken } from "../../controllers/login.controller";

const router = Router();

// Usa el middleware en las rutas que necesitas proteger
router.get("/bye-world", byeWorld);

export default router;

