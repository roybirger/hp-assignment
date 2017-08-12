export const FETCH_USER = 'FETCH_USER'
export const RETURN_BOOK = 'RETURN_BOOK'
export const UPDATE_USER = 'UPDATE_USER'


export const user = (state = [], {type, payload}) => {
    switch (type) {
        case FETCH_USER:
            console.log('fetching user');
            return state;
        case RETURN_BOOK:
            console.log('return book');
            return state.map(user => {
                if (user.id === payload.userId) {
                        user.books = user.books.filter(book => book.id !== payload.bookId)    
                }
                return user;
            })
        case UPDATE_USER:
            console.log('updating user');
            state = [payload];
            return state;
        default:
            return state;
    }
}