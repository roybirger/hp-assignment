export const FETCH_USERS    = 'FETCH_USERS'
export const ADD_USER       = 'ADD_USER'
export const SEARCH_USER    = 'SEARCH_USER'
export const UPDATE_USERS    = 'UPDATE_USERS'
export const CLEAN_FILTERS    = 'CLEAN_FILTERS'


let id;

export const users = (state = [], {type, payload}) => {
    switch (type) {
        case CLEAN_FILTERS:
            console.log('clean filter');
            return state.map((user) => {
                user.show = true;
                return user;
            });
        case UPDATE_USERS:
            console.log('updating users');
            state = payload.users;
            id = payload.totalUsers;
            return state;
        case FETCH_USERS:
            console.log('fetching users');
            return state;
        case ADD_USER:
            console.log('adding user');
            state.push({
                'id': id,
                'name': payload,
                'show': true
            });
            id++;
            return state;
        case SEARCH_USER:
            console.log('searching user');
            return state.map((user) => {
                user.show =  user.name.toLowerCase().indexOf(payload) > -1; 
                return user;
            })
        default:
            return state;
    }
}