const initialState = {
    history: [],
}

export default function historyReducer(state=initialState, action) {
    const {type,payload} = action;

    switch(type) {
        case 'ADD_HISTORY':
            const history = [...state.history,payload];
            return {history};
        default:
            return state;
    }    

}

export const addAction = (action) =>{
        return {
        type: 'ADD_HISTORY',
        payload: action
    }
}