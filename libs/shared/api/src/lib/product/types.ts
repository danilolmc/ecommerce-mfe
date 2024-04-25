export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    maxRating: number;
    maxRatingAsArray: number[];
}
export interface ResponseData {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
