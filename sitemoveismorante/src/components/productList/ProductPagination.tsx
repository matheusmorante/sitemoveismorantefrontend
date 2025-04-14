import { useEffect, useState } from 'react';
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
    }, [products, offset, itemsPerPage, setCurrentProducts]);

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
            previousClassName=' border border-gray-300 rounded hover:bg-gray-200'
            previousLinkClassName='block px-3 py-2 '
            nextClassName='border border-gray-300 rounded hover:bg-gray-200'
            nextLinkClassName='block px-3 py-2'
            containerClassName="flex justify-center items-center gap-2 mt-6"
            pageClassName=" border border-gray-300 rounded hover:bg-gray-200"
            pageLinkClassName='block px-3 py-2'
            activeClassName="bg-blue-400 hover:bg-blue-600"
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
        />

    )
}

export default ProductPagination
