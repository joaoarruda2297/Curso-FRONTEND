const {Router} = require("express");

const usersRouter = require("./user.routes");
const moviesNotesRouter = require("./moviesNotes.routes");
const moviesTagsRouter = require("./moviesTags.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/moviesnotes", moviesNotesRouter);
routes.use("/moviestags", moviesTagsRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;