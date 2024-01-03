import { Router } from "express";
import {  helloWorld} from "../../controllers/hello.controller";
import {  validateToken } from "../../controllers/login.controller";

const router = Router();

// Usa el middleware en las rutas que necesitas proteger
router.get("/hello-world",validateToken, helloWorld)

export default router;

