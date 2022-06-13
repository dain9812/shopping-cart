import { useState } from "react";
import CartList from "./components/CartList";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Shadow from "./components/Shadow";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav />
      <ProductList setOpen={setOpen} />
      {open ? (
        <>
          <CartList open={open} />
          <Shadow setOpen={setOpen} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
