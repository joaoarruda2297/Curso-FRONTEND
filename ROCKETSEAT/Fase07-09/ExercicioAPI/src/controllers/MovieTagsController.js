const knex = require("../database/knex");

class MovieTagsController{
    async index(req,res){
        const {movie_id} = req.query;

        const tags = await knex("movie_tags")
            .where({movie_id})
        
        return res.json(tags);
    }
}

module.exports = MovieTagsController;