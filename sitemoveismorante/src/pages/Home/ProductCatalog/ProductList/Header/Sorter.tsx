import { SortBy } from '../../../../../types/productsCatalog.type';

interface Props {
  sortBy: SortBy;
  setSortBy: React.Dispatch<React.SetStateAction<SortBy>>
}

const Sorter = ({ sortBy, setSortBy }: Props) => {
  let sorterIconClassname = "";
  switch (sortBy) {
    case 'descPrice':
      sorterIconClassname = "bi bi-sort-numeric-down-alt"
      break;
    case 'ascPrice':
      sorterIconClassname = "bi bi-sort-numeric-down"
      break;
    case 'descTitle':
      sorterIconClassname = "bi bi-sort-alpha-down-alt"
      break;
    case 'ascTitle':
      sorterIconClassname = "bi bi-sort-alpha-down"
      break
  }
  return (
    <div className="">
      <select
        className="ml-3 appearance-none outline-none p-1 bg-gray-100 "
        onChange={e => setSortBy(e.target.value as SortBy)}
      >
        <option value="ascTitle">Alfabeto crescente</option>
        <option value="descTitle">Alfabeto decrescente</option>
        <option value="ascPrice">Menor preço</option>
        <option value="descPrice">Maior preço</option>
      </select>
      <i className={sorterIconClassname} />
    </div>
  );
};

export default Sorter;
