const knex = require("../database/knex");

class MoviesNotesRepository{
    async createMovie({title,description, rating, user_id}){
        const [note_id] = await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id
        });

        return note_id;
    }

    async createTags(tagsInsert){
        const movieTagsCreated = await knex("movie_tags").insert(tagsInsert);

        return movieTagsCreated;
    }
}