import {combineReducers} from 'redux'
import ProductReducer from '../Productreducer/ProductReducer'
// import {ProductReducer} from './ProductReducer'
export const reducer=combineReducers({productdata:ProductReducer})