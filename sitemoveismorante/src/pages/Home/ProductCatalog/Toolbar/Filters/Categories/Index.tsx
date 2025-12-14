import { useEffect, useState } from "react"
import { getCategories } from "../../../../../../mock/services/categories";
import { Category } from "../../../../../../types/category.type";
import ParentCategory from "./ParentCategory";

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const parentCategories = categories
        .filter(c => c.parentsId === null)
        .sort((a: Category, b: Category) => a.name.localeCompare(b.name));

    useEffect(() => {
        const load = async () => {
            const data = await getCategories();
            setCategories(data);
        }
        
        load();
    }, [])

    if (parentCategories.length === 0) return null;

    return (
        <div>
            <h1 className="text-base font-bold">Fltrar por categoria:</h1>
            <ol>
                {parentCategories.map(c => (
                    <ParentCategory categories={categories} parentCategory={c} />
                ))}
            </ol>
        </div>
    )
}

export default Categories