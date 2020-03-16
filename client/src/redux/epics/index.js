import { combineEpics } from 'redux-observable';
import * as userEpics from './user';

const rootEpic = combineEpics(
    userEpics
);

export default rootEpic;