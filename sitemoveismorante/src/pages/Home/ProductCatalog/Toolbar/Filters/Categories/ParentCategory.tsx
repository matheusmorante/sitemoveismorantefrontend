import { useState } from 'react';
import { Category } from '../../../../../../types/category.type';
import Subcategory from './Subcategory';
import { useProductsCatalog } from '../../../../../../context/ProductsCatalogContext';

interface Props {
    parentCategory: Category;
    categories: Category[];
}

const ParentCategory = ({ parentCategory, categories }: Props) => {
    const { filterConfig, setFilterConfig } = useProductsCatalog();
    const [showSubcategories, setShowSubcategories] = useState(false);
    const filteredCategoryIds = filterConfig.categoryIds;
    const parentCategoryId = parentCategory.id;

    const subCategories = categories
        .filter(c => Array.isArray(c.parentsId) && c.parentsId.includes(parentCategoryId))
        .sort((a: Category, b: Category) => a.name.localeCompare(b.name));


    const areAllSubCategoriesSelected =
        subCategories.length > 0 &&
        subCategories.every(c => filteredCategoryIds.includes(c.id));


    const subCategoryIds = subCategories.map(subCategory => subCategory.id)

    const toggleParentSelection = () => {
        setFilterConfig(prev => {
            const current = [...prev['categoryIds']];

            if (areAllSubCategoriesSelected) {
                const newIds = current.filter(id => !subCategoryIds.includes(id));
                return { ...prev, categoryIds: newIds }
            } else {
                const newIds = [...current, ...subCategoryIds];
                return { ...prev, categoryIds: newIds };
            }
        }) 
    }
    return (
        <li
            key={parentCategoryId}
            className={`border-b py-2 ${areAllSubCategoriesSelected && 'border-blue-400'}`}
        >
            <div className="flex justify-between">
                <div className='flex gap-1'>
                    <input
                        type='checkbox'
                        checked={areAllSubCategoriesSelected}
                        onClick={toggleParentSelection}
                    />
                    <div
                        onClick={toggleParentSelection}
                        className={areAllSubCategoriesSelected ? 'text-blue-600' : ''}
                    >
                        {parentCategory.name}
                    </div>
                </div>
                <span
                    onClick={() => setShowSubcategories(!showSubcategories)}
                    className={
                        `w-5 text-center ${areAllSubCategoriesSelected && 'text-blue-600'}`
                    }
                >
                    {showSubcategories ? ' -' : ' +'}
                </span>
            </div>

            {showSubcategories && (
                <ol className="pl-2">
                    {subCategories.map(c => (
                        <Subcategory subCategory={c} />
                    ))}
                </ol>
            )}
        </li>
    );
};

export default ParentCategory;
