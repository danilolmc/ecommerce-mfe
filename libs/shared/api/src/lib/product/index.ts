import { Product } from "./types";

export async function getProductList() {
    const response = await fetch("https://dummyjson.com/products");
    const OK = response.status == 200;
    const responseJson = await response.json();
    return OK ? responseJson.products.map((product: Product) => (Object.assign(Object.assign({}, product), { maxRating: 5, maxRatingAsArray: new Array(5) }))) : [];

}

export async function getProductById(id: string) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const OK = response.status == 200;
    const responseJson = await response.json();
    return OK ? Object.assign(Object.assign({}, responseJson), { maxRating: 5, maxRatingAsArray: new Array(5) }) : null;
}