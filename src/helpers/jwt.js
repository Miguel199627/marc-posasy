import axios from "axios";

const TOKEN_KEY = "MARCPOSASY_TOKEN";

export function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}