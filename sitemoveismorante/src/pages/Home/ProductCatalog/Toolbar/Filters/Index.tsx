import PriceRange from './PriceRange';
import Search from './Search';
import Categories from './Categories/Index';

const Filters = () => {
  return (
    <div className="flex flex-col p-3 m-3 gap-3 bg-white shadow-md w-full">
      <Search/>
      <PriceRange/>
      <Categories />
    </div>
  );
};

export default Filters;
