
import { combineReducers } from "redux"
import IncDec from "./IncDec"

const rootReducer=combineReducers({
    IncDec: IncDec,
})

export default rootReducer