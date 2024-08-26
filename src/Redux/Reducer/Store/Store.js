import { createStore } from "redux";
import { reducer } from "../Reducer/Reducer";
// import {reducer} from '../Productreducer/ProductReducer'
export const Store=createStore(reducer,{})