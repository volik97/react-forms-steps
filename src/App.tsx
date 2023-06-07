import { useState } from "react";
import "./App.css";
import ListItemsFC from "./components/ListItemsFC";
import FormFC from "./components/FormFC";

export type IItem = {
  id: string;
  date: string;
  distance: number;
  onDelete?: () => void;
};

export interface onSubmit {
  addItem: (itemData: IItem) => void;
}

function App() {
  const [items, setItems] = useState<IItem[]>([]);

  const addItem = (itemData: IItem) => {
    const findIndexDate = items.findIndex(
      (item) => item.date === itemData.date
    );
    if (findIndexDate === -1) {
      setItems([...items, itemData])
    } else {
      setItems(prevItems => {
        const items = [...prevItems]
        items[findIndexDate].distance =  Number(items[findIndexDate].distance) + Number(itemData.distance)
        return items
      })
    }
  };
  const handleDelete = (id:string) => {
    setItems(prevItems => prevItems.filter((item) => item.id !== id))
  }

  return (
    <>
      <FormFC addItem={addItem} />
      <div className="titles">
            <span>Date (DD:MM:YY)</span>
            <span>Distance (KM)</span>
            <span>Actions</span>
      </div>
      <ListItemsFC handleDelete={handleDelete} items={items}  />
    </>
  );
}

export default App;
