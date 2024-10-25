import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const getProductsasync = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log(response.data);
        getProducts(response.data) 

    } catch (error) {
        console.error('Error:', error);

    }
    ;
}
