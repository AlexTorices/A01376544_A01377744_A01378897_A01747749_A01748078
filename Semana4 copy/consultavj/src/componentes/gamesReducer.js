export const gamesReducer = (state = [], action) => {
    switch (action.type) {
        //Se dispara con la acción de agregar un todo.
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((game) => game.id !== action.payload);
        default:
            break;
    }
};