import { Router } from "express";

const router = Router();

// Handles GET request to "/"
router.get("/", (_request, response) => {
  response.send("Hello World from within route!");
});

// Matches anything after "/"
router.get("/:id", (request, response) => {
  const { id } = request.params;

  response.send(`Hello World from page id ${id}!`);
});

export default router;
