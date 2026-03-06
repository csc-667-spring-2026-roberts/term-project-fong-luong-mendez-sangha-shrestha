import { Router } from "express";

const router = Router();

// Handles GET request to "/"
router.get("/", (_request, response) => {
  response.send("Hello World from within route!");
});

export default router;
