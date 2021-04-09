const initialState = {
    text: '',
    data: []
};

export default function TestReducers(state = initialState, action) {
    switch (action.type) {
        case 'DELETE':
            return { 
                ...state, data: state.data.filter((p) => p !== action.data)
             }
        case 'ADD':
            return {
                ...state, data: [...state.data, ...action.data]
            }
        case 'TEXT':
            return { ...state, text: action.text }
        default:
            return state;
    }
}