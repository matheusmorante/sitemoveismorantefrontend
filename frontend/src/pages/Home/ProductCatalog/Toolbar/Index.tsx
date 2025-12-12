import Filters from './Filters/Index';
import { SetStateAction } from 'react';
import Sorter from './Sorter';
import { SortBy } from '../../../../types/productsCatalog.type';

interface Props {
  setSortBy: React.Dispatch<SetStateAction<SortBy>>;
}

const Toolbar = ({ setSortBy }: Props) => {
  return (
    <div className="flex flex-col w-[200px]">
      <Filters/>
      <Sorter setSortBy={setSortBy} />
    </div>
  );
};

export default Toolbar;
