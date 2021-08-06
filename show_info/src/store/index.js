
const initialState = { favourite_movies:[]}

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case "add":
            

            let movies = [...state.favourite_movies]
            let contains = movies.find( (movie) => (movie.id ==action.payload.id ))

            if (contains !== undefined){
                return state;
            }
            else {

            return{
                ...state,
                favourite_movies: [
                    ...state.favourite_movies,
                    action.payload
                ]
            }

        }

        case "remove":

            let oldmovies = [...state.favourite_movies]
            let newMoVies = oldmovies.filter( (movie) => (movie.id != action.payload ))
            
            return{
                ...state,
                favourite_movies: newMoVies
            }

        default:
            return state;

    }


}


export default movieReducer