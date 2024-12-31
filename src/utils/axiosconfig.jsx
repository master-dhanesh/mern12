import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

export default instance;

// https://fakestoreapi.com/products
// https://fakestoreapi.com/products/1
// https://fakestoreapi.com/products/1
// https://fakestoreapi.com/users
// https://fakestoreapi.com/users/1
