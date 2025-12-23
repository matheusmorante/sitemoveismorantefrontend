import { SetStateAction } from 'react';
import ReactPaginate from 'react-paginate';

interface Props {
   pageCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

const ProductPagination = ({
  pageCount,
  currentPage,
  setCurrentPage,
}: Props) => {
  const handlePageClick = (e: { selected: number }) => {
    setCurrentPage(e.selected);
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  };

  return (
    <ReactPaginate
      previousLabel="<"
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageCount={pageCount}
      previousClassName=" border border-gray-300 rounded hover:bg-gray-200"
      previousLinkClassName="block px-3 py-2 "
      nextClassName="border border-gray-300 rounded hover:bg-gray-200"
      nextLinkClassName="block px-3 py-2"
      containerClassName="flex justify-center items-center gap-2 mt-6"
      pageClassName=" border border-gray-300 rounded hover:bg-gray-200"
      pageLinkClassName="block px-3 py-2"
      activeClassName="bg-blue-400 hover:bg-blue-600"
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      forcePage={currentPage}
    />
  );
};

export default ProductPagination;
