import CartList from "./components/CartList";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <Nav />
      <ProductList />
      <CartList />
    </div>
  );
};

export default App;
