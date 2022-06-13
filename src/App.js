import { useState } from "react";
import CartList from "./components/Cart/CartList";
import Nav from "./components/Nav";
import ProductList from "./components/Product/ProductList";
import Shadow from "./components/Cart/Shadow";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav setOpen={setOpen} />
      <ProductList setOpen={setOpen} />
      <CartList open={open} setOpen={setOpen} />
      <Shadow open={open} setOpen={setOpen} />
    </>
  );
};

export default App;
