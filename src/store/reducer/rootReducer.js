const initState = {
    user: [
        { id: 1, name: 'Quang Diep' },
        { id: 2, name: 'Xuan Binh' },
    ],
    // post: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER': {
            console.log("run into delete user: ", action)
            let user = state.user;
            user = user.filter((item) =>
                item.id !== action.payload.id);

            return { ...state, user }
        }
        case 'CREATE_USER': {
            let id = Math.floor(Math.random() * 100);
            let users = { id: id, name: `random ${id}` }
            return {
                ...state, user: [...state.user, users]
            }
        }
        default: {
            return state;
        }
    }
}

export default rootReducer