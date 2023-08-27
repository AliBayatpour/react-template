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

const AUTHORIZATION = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMDc2YmM5Yy1mNDMzLTQzZmUtYTllNy0xYWY3MWY5NTAxN2IiLCJlbWFpbCI6Im9raGNoaTNAZ21haWwuY29tIiwiaWF0IjoxNjkzMTcwNjc0LCJleHAiOjE2OTMxNzQyNzR9.CIJpN8mYUQCEvNZ0V6tbtjGGDq8Lo8n5HOjsSb0_AAw`;

export const ItemContextProvider: React.FC<Props> = ({ children }) => {
  const [items, setItems] = useState<IItem[] | []>(INITIAL_ITEMS.data);
  const [error, setError] = useState<string>("");

  const onSetItems = (items: IItem[]) => {
    setItems(items);
  };

  // const onfetch = async () => {
  //   try {
  //     const response = await fetch("URL_GOES_HERE", {
  //       method: "get",
  //       headers: new Headers({
  //         Authorization: AUTHORIZATION,
  //         "Content-Type": "application/json",
  //       }),
  //     });
  //     const items = await response.json();
  //     setErrorEmpty();
  //     onSetItems(items);
  //   } catch (error) {
  //     setError("failed to fetch items");
  //   }
  // };

  // const setErrorEmpty = () => {
  //   setError("");
  // };

  // const onUpdateItem = async () => {
  //   try {
  //     const response = await fetch("URL_GOES_HERE", {
  //       method: "put",
  //       headers: new Headers({
  //         Authorization: AUTHORIZATION,
  //         "Content-Type": "application/json",
  //       }),
  //       body: { ITEM_HERE },
  //     });

  //     onSetItems(items);
  //     onfetch();
  //   } catch (error) {
  //     setError("failed to fetch items");
  //   }
  // };

  const contextValue = {
    items,
    onSetItems,
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};
