const {Router} = require("express");
const MoviesNotesController = require("../controllers/MoviesNotesController");

const moviesNotesController = new MoviesNotesController();
const movieNotesRoutes = Router();

movieNotesRoutes.post("/:user_id", moviesNotesController.create);
movieNotesRoutes.get("/:id", moviesNotesController.show);
movieNotesRoutes.delete("/:id", moviesNotesController.delete);
movieNotesRoutes.get("/", moviesNotesController.index);

module.exports = movieNotesRoutes;