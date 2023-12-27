import { Router } from "express";

import { login } from "../../controllers/login.controller";
import { validateToken } from "../../controllers/login.controller";

const router = Router();

router.post("/login", login);
router.post("/validate-token", validateToken);

export default router;
