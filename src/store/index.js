import { createStore } from 'redux'

const reducer = (state={counter:0}, action) => {
    if(action.type === 'INC') {
        return {counter: state.counter + 1}
    }
    if(action.type === 'DES') {
        return {counter: state.counter-1}
    }
    if(action.type === 'ADD') {
        return {counter: state.counter+10}
    }

    return state;

}
const store = createStore(reducer);
export default store;