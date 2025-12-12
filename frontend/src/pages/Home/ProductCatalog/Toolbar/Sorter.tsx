import { SetStateAction } from 'react';
import { SortBy } from '../../../../types/productsCatalog.type';

const Sorter = ({ setSortBy }: { setSortBy: React.Dispatch<SetStateAction<SortBy>> }) => {
  return (
    <div className="block p-3 m-3 bg-white shadow-md">
        <label>Ordernar por</label>
        <select className="ml-3" onChange={e => setSortBy(e.target.value as SortBy)}>
          <option value="ascTitle">A-Z</option>
          <option value="descTitle">Z-A</option>
          <option value="ascPrice">Menor preço</option>
          <option value="descPrice">Maior preço</option>
        </select>
    </div>
  );
};

export default Sorter;
