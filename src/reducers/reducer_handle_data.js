import { CREATE_NEW } from "../actions/types";
import initialState from "./reducer_teams";

export default function(state = initialState(), action) {

  switch (action.type) {
    case CREATE_NEW:
      return [action.payload, ...state];
    default:
      return state;
  }
}