import axios from "axios";

const ip = "150.230.74.211:81";

const ORDENES_API_BASE_URL = "http://" + ip;

export function getOrdenes() {
    console.log(ORDENES_API_BASE_URL);
    return axios.get(`${ORDENES_API_BASE_URL}/api/order/all`);
}

export function getOrdenById(id) {
    return axios.get(`${ORDENES_API_BASE_URL}/api/order/${id}`);
}

export function createOrden(orden) {
    return axios.post(`${ORDENES_API_BASE_URL}/api/order/new`, orden);
}

export function updatOrdeno(orden) {
    return axios.put(`${ORDENES_API_BASE_URL}/api/order/update`, orden);
}

export function deleteOrden(id) {
    return axios.delete(`${ORDENES_API_BASE_URL}/api/order/${id}`);
}
export function filterZone(zona) {
    return axios.get(`${ORDENES_API_BASE_URL}/api/order/zona/${zona}`);
}
export function filterSalesman(id) {
    return axios.get(`${ORDENES_API_BASE_URL}/api/order/salesman/${id}`);
}
export function filterState(state,id) {
    return axios.get(`${ORDENES_API_BASE_URL}/api/order/state/${state}/${id}`);
}
export function filterDate(date,id) {
    return axios.get(`${ORDENES_API_BASE_URL}/api/order/date/${date}/${id}`);
}
