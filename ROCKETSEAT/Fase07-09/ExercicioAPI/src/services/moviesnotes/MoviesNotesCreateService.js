class MoviesNotesCreateService{
    constructor(moviesNotesRepository){
        this.moviesNotesRepository = moviesNotesRepository;
    }

    async execute({title, description, rating, tags, user_id}){
        const note_id = await this.moviesNotesRepository.createMovie({title, description, rating, user_id});

        if(tags.length !== 0){
            const tagsInsert = tags.map(name => {
                return{
                    note_id,
                    user_id,
                    name
                }
            });

            await this.moviesNotesRepository.createTags(tagsInsert);
        }

        return {id: note_id};
    }
}