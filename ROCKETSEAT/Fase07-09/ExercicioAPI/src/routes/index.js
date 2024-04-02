const {Router} = require("express");

const usersRouter = require("./user.routes");
const moviesNotesRoutes = require("./moviesNotes.routes");
const moviesTagsRoutes = require("./moviesTags.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/moviesnotes", moviesNotesRoutes);
routes.use("/moviestags", moviesTagsRoutes);

module.exports = routes;