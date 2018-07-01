import { TEAMS_PROCESSED, CREATE_NEW } from './types';

export function setProcessedData(data) {
  return {
    type: TEAMS_PROCESSED,
    payload: data
  };
}

export function createNew(values, callback) {
  callback();

  return {
    type: CREATE_NEW,
    payload: values
  };
}