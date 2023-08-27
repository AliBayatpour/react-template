import React, { useState } from "react";
import { IItem } from "../interfaces/item.interface";

const INITIAL_ITEMS: { data: IItem[] } = { data: [] };

interface IItemContext {
  items: IItem[] | [];
  onSetItems: (val: IItem[]) => void;
}

export const ItemContext = React.createContext<IItemContext>({
  items: [],
  onSetItems: (val: IItem[] | []) => {},
});

interface Props {
  children: JSX.Element;
}

export const ItemContextProvider: React.FC<Props> = ({ children }) => {
  const [items, setItems] = useState<IItem[] | []>(INITIAL_ITEMS.data);

  const onSetItems = (items: IItem[]) => {
    setItems(items);
  };
  // const onfetch = () => {
  //   const items = await get()
  //   onSetItems(items)
  // }
  // const onUpdateItem = async () => {
  //   await put(URL);
  //   onfetch()
  // }

  const contextValue = {
    items,
    onSetItems,
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};
