const {Router} = require("express");
const MoviesNotesController = require("../controllers/MoviesNotesController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const moviesNotesController = new MoviesNotesController();
const movieNotesRoutes = Router();

movieNotesRoutes.use(ensureAuthenticated);

movieNotesRoutes.post("/", moviesNotesController.create);
movieNotesRoutes.get("/:id", moviesNotesController.show);
movieNotesRoutes.delete("/:id", moviesNotesController.delete);
movieNotesRoutes.get("/", moviesNotesController.index);

module.exports = movieNotesRoutes;