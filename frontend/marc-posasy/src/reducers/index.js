import { combineReducers } from 'redux';

import auths from './auth';
import users from './user';

export const reducer = combineReducers({ auths, users });