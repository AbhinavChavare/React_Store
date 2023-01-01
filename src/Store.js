import { createStore } from "redux";
import rootReducer from "./Components/ReactReducer";

const store=createStore(rootReducer)
export default store