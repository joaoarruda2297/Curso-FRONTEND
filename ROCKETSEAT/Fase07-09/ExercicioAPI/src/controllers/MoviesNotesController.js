const knex = require("../database/knex");
const MoviesNotesRepository = require("../repositories/MoviesNotesRepository");
const MoviesNotesCreateService = require("../services/moviesnotes/MoviesNotesCreateService");

class MoviesNotesController{
    async create(req,res){
        const {title, description, rating, tags} = req.body;
        const user_id = req.user.id;
        const moviesNotesRepository = new MoviesNotesRepository();
        const moviesNotesCreateService = new MoviesNotesCreateService(moviesNotesRepository);

        await moviesNotesCreateService.execute({title, description, rating, tags, user_id});
        


        return res.json();        
    }

    async show(req,res){
        const {id} = req.params;

        const note = await knex("movie_notes").where({id}).first();
        const tags = await knex("movie_tags").where({note_id : id}).orderBy("name");

        return res.json({
            ...note,
            tags
        });
    }

    async delete(req, res){
        const {id} = req.params;

        await knex("movie_notes").where({id}).delete();

        return res.json()
    }

    async index(req, res){
        const {title, tags} = req.query;
        const user_id = req.user.id;

        let notes;

        if(tags){
            const filterTags = tags.split(',').map(tag => tag.trim());//trim para remover eventuais espaços em branco
            notes = await knex("movie_tags")
                .select([
                    "movie_notes.id",
                    "movie_notes.title",
                    "movie_notes.user_id"
                ])
                .where("movie_notes.user_id", user_id)
                .whereLike("movie_notes.title", `%${title}%`)
                .whereIn("name", filterTags)
                .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
                .orderBy("movie_notes.title");
        }
        else{
            notes = await knex("movie_notes")
                .where({user_id})
                .whereLike("title", `%${title}%`)
                .orderBy("title");
        }

        const userTags = await knex("movie_tags").where({user_id});
        const notesWithTags = notes.map(note => {
            const noteTags = userTags.filter(tag => tag.note_id === note.id);

            return {
                ...note,
                tags: noteTags
            }
        });
        return res.json(notesWithTags);
    }
}

module.exports = MoviesNotesController;