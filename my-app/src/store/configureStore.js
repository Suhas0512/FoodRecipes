import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import recipesReducers from '../reducers/recipesReducer'
const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        recipes:recipesReducers
    }),applyMiddleware(thunk))
    return store
}
export default configureStore