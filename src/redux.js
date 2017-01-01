import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Map} from 'immutable';

const incr = x => x + 1;
const decr = x => x - 1;
const incr_all = x => x.map(incr);
const decr_all = x => x.map(decr);
const append = (c, e) => c.concat(e);
const identity = x => x;
const fns1 = Map({incr, decr});
const fns2 = Map({incr_all, decr_all, append});

function part1(state = 0, action) {
    return fns1.get(action.type, identity).call(null, state);
}
function part2(state = [], action) {
    return fns2.get(action.type, identity).call(null, state, action.data);
}

const myReducer = combineReducers({part1, part2});
const finalCreateStore = compose(applyMiddleware(logger()))(createStore);

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = finalCreateStore(myReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
    "x"
    //console.log("subs " + JSON.stringify(store.getState()))
);

store.dispatch({type: "incr"});
store.dispatch({type: "incr"});
store.dispatch({type: "decr"});
store.dispatch({type: "decr"});
store.dispatch({type: "append", data: [1, 2, 3, 4]});
store.dispatch({type: "append", data: [1, 2, 3, 4, 5]});
store.dispatch({type: "incr_all"});
store.dispatch({type: "incr_all"});
store.dispatch({type: "incr_all"});
