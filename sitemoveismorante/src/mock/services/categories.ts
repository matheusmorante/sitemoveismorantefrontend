import { Category } from "../../types/category.type";
import { loadCategories } from "../utils/storage";

export const getCategories = (): Promise<Category[]> => {
    return loadCategories();
}