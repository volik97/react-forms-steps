import { IItem } from "../App";
import ItemFC from "../components/ItemFC";

interface Props {
    items: IItem[],
    handleDelete: (id:string) => void
}

export default function ListItemsFC({handleDelete,  items }:Props) {
  const itemsArray = items.map((item) => item);
  if (!items.length) {
    return <div className="listItems">Нет записей</div>;
  }

  const sortByDateItemsArray = itemsArray.sort((a, b) => {
    const collator = new Intl.Collator();
    return collator.compare(b.date, a.date);
  });

  return (
    <div className="listItems">
      {sortByDateItemsArray.map((item) => {
        console.log(sortByDateItemsArray)
        return <ItemFC key={item.id} item={item} handleDelete={handleDelete}/>}
      )}
    </div>
  );
}
