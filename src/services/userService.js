
import axios from 'axios';
const ip = "150.230.74.211:81";

const USUARIOS_API_BASE_URL = "http://" + ip;

export function getUsers() {
    console.log(USUARIOS_API_BASE_URL);
    return axios.get(`${USUARIOS_API_BASE_URL}/api/user/all`);
}

export function getUserById(id) {
    return axios.get(`${USUARIOS_API_BASE_URL}/api/user/${id}`);
}

export function createUser(usuario) {
    return axios.post(`${USUARIOS_API_BASE_URL}/api/user/new`, usuario);
}

export function updateUser(usuario) {
    return axios.put(`${USUARIOS_API_BASE_URL}/api/user/update`, usuario);
}

export function deleteUser(id) {
    return axios.delete(`${USUARIOS_API_BASE_URL}/api/user/${id}`);
}
export function emailExist(email) {
    return axios.get(`${USUARIOS_API_BASE_URL}/api/emailexist/${email}`)
}
export function userData(email,password) {
    return axios.get(`${USUARIOS_API_BASE_URL}/api/user/${email}/${password}`)
}
export function MonthBirthday(month) {
    return axios.get(`${USUARIOS_API_BASE_URL}/api/user/birthday/${month}`)
}
