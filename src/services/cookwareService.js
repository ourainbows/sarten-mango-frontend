import axios from "axios";

const ip = "150.230.74.211:81";

const UTENSILIOS_API_BASE_URL = "http://" + ip;

export function getUtensilios() {
    console.log(UTENSILIOS_API_BASE_URL);
    return axios.get(`${UTENSILIOS_API_BASE_URL}/api/cookware/all`);
}

export function getUtensilioById(id) {
    return axios.get(`${UTENSILIOS_API_BASE_URL}/api/cookware/${id}`);
}

export function createUtensilio(usuario) {
    return axios.post(`${UTENSILIOS_API_BASE_URL}/api/Cookware/new`, usuario);
}

export function updateUtensilio(usuario) {
    return axios.put(`${UTENSILIOS_API_BASE_URL}/api/cookware/update`, usuario);
}

export function deleteUtensilio(id) {
    return axios.delete(`${UTENSILIOS_API_BASE_URL}/api/cookware/${id}`);
}
export function filterPrice(price) {
    return axios.get(`${UTENSILIOS_API_BASE_URL}/api/cookware/price/${price}`);
}
export function filterDescription(description) {
    return axios.get(`${UTENSILIOS_API_BASE_URL}/api/cookware/description/${description}`);
}



