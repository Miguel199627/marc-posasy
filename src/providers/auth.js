import axios from 'axios';

import { BASE_URL } from '../constants/actionTypes';

export const login = (dataForm) => axios.post(`${BASE_URL}/auth/login`, dataForm);