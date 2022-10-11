import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import Item from "./pages/item/Item";
import Layout from "./components/shared/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="items/:itemsId" element={<Item />} />
      </Route>
    </Routes>
  );
}

export default App;
