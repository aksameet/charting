import { combineReducers } from "redux";
import HandleDataReducer from "./reducer_handle_data";
import ProcessedDataReducer from "./reducer_processed_data";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    teams: HandleDataReducer,
    processedData: ProcessedDataReducer,
    form: formReducer
});

export default rootReducer;
