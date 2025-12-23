import { SortBy } from '../../../../../types/productsCatalog.type';

const Sorter = (
  { setSortBy }: {setSortBy: React.Dispatch<React.SetStateAction<SortBy>>}
) => {
  return (
   
      <select
        className="ml-3 p-1 bg-gray-100 "
        onChange={e => setSortBy(e.target.value as SortBy)}
      >
        <option value="ascTitle">Alfabético A-Z</option>
        <option value="descTitle">Alfabético Z-A</option>
        <option value="ascPrice">Menor preço</option>
        <option value="descPrice">Maior preço</option>
      </select>
 
  );
};

export default Sorter;
