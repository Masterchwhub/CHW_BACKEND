// Importa el middleware
import { authenticateMiddleware } from "../../middleware/authenticate";
import { Router } from "express";
import { login, validateToken } from "../../controllers/login.controller";
import { helloWorld } from "controllers/hello.controller";

const router = Router();

// Usa el middleware en las rutas que necesitas proteger
router.post("/login", login);
router.post("/validate-token", validateToken);

export default router;

