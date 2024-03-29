import axios from 'axios';
import { resolve } from './resolve.js';

export async function login(username, password) {
  return await resolve(axios.post('http://localhost:8080/auth/authenticate', {username,password}).then(res => res.data));
}

export async function signup(name, password, email) {
    return await resolve(axios.post('http://localhost:8080/auth/new', {name,password,email,roles:'USER'}).then(res => res.data));
}
