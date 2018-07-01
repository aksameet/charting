import { TEAMS_PROCESSED } from '../actions/types';

export default function(state = null, action) {

  switch (action.type) {
    case TEAMS_PROCESSED:
      return action.payload;
    default:
      return state;
  }
}
