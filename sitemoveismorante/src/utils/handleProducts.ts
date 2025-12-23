import { FilterConfig } from '../types/filterConfig.type';
import { Product } from '../types/productsCatalog.type';
import { SortBy } from '../types/productsCatalog.type';

const ITEMS_PER_PAGE = 15;

const filterProducts = (
  products: Product[],
  filterConfig: FilterConfig,
) =>
  products.filter(p => {
    const { description } = p;
    const price = p.pricing.price;
    const { titleSearch, minPrice, maxPrice, categoryIds } = filterConfig;
    const min = minPrice ? Number(minPrice) : null;
    const max = maxPrice ? Number(maxPrice) : null;

    const matchesTitle = description
      .toLowerCase().includes(titleSearch.toLowerCase());

    const matchesPrice =
      (min === null || price >= min) &&
      (max === null || price <= max);

    const matchesCategory = categoryIds?.length > 0 ? categoryIds.includes(p.categoryId) : true
      
    return matchesTitle && matchesPrice && matchesCategory;;
  });

const sortProducts = (products: Product[], sortBy: SortBy) => {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'ascTitle':
        return a.description.localeCompare(b.description);
      case 'descTitle':
        return b.description.localeCompare(a.description);
      case 'ascPrice':
        return a.pricing.price - b.pricing.price;
      case 'descPrice':
        return b.pricing.price - a.pricing.price;
      default:
        return 0;
    }
  });
};

const paginate = (products: Product[], currentPage: number) => {
  const offset = currentPage * ITEMS_PER_PAGE;
  return {
    handledProducts: products.slice(offset, offset + ITEMS_PER_PAGE),
    pageCount: Math.ceil(products.length / ITEMS_PER_PAGE),
  };
}

export const handleProducts = async (
  products: Product[],
  filterConfig: FilterConfig,
  sortBy: SortBy,
  currentPage: number
) => {
  const filtered = filterProducts(products, filterConfig);
  const sorted = sortProducts(filtered, sortBy);
  return paginate(sorted, currentPage);
};