import { ErrorMessage } from "./components/Error";
import { Loader } from "./components/Loader";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";

function App() {
  const { products, error, loading } = useProducts();
  
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error}/>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
