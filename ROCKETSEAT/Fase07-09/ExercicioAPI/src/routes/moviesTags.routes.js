const {Router} = require("express");
const MovieTagsController = require("../controllers/MovieTagsController");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const movieTagsController = new MovieTagsController();
const movieTagsRoutes = Router();

movieTagsRoutes.get("/",ensureAuthenticated, movieTagsController.index);

module.exports = movieTagsRoutes;