import { combineReducers } from 'redux';

import auths from './auth';
import users from './user';
import sales from './sale';

export const reducer = combineReducers({ auths, users, sales });