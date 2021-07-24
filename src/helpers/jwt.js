const TOKEN_KEY = "MARCPOSASY_TOKEN";
const USER_KEY = "USER_KEY";

export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

export function setDataUser(data) {
    localStorage.setItem(USER_KEY, data);
}

export function getDataUser() {
    return localStorage.getItem(USER_KEY);
}

export function removeDataUser() {
    localStorage.removeItem(USER_KEY);
}

export function loggedIn() {
    return !!localStorage.getItem(TOKEN_KEY);
}