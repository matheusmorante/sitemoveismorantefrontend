import { useEffect, useState, useRef } from 'react';
import { Product } from '../../assets/data/products';
import ReactPaginate from 'react-paginate';

interface ProductPaginationProps {
    products: Product[],
    setCurrentProducts: (products: Product[]) => void
}

const ProductPagination = ({ products, setCurrentProducts }: ProductPaginationProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;

    useEffect(() => {
        const newCurrentProducts = products.slice(offset, offset + itemsPerPage);
        setCurrentProducts(newCurrentProducts);
    }, [ products, offset, itemsPerPage, setCurrentProducts]);

    const handlePageClick = (e: { selected: number }) => {
        setCurrentPage(e.selected)
        window.scrollTo({
            top: 400,
            behavior: 'smooth'
        });
    }

    return (

        <ReactPaginate
            previousLabel="<"
            breakLabel='...'
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousClassName='px-3 py-1 border border-gray-300 rounded hover:bg-gray-200'
            nextClassName='px-3 py-1 border border-gray-300 rounded hover:bg-gray-200'
            containerClassName="flex justify-center  items-center gap-2 mt-6"
            pageClassName="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
            activeClassName="bg-blue-400"
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
        />
    )
}

export default ProductPagination
