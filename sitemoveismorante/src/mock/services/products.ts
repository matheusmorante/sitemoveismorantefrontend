import { Product } from "../../types/productsCatalog.type";
import { loadProducts } from "../utils/storage"

export const getProducts = ():Promise<Product[]> => {
    return loadProducts();
}