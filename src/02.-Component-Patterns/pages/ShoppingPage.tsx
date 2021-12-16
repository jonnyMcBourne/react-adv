import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/";
import {products} from '../data/products';
import "../styles/custom-styles.css";
import {useShoppingCart} from '../hooks/useShoppingCart';


export const ShoppingPage = () => {

  const {onProductCountChange,shoppingCart} = useShoppingCart()
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{ display: "flex" }}>
        {products.map((prod) => (
          <ProductCard
            product={prod}
            className="bg-dark"
            key={prod.id}
            onChange={onProductCountChange}
            value={shoppingCart[prod.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="buttons-white" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, prod]) => (
          <ProductCard
            product={prod}
            className="bg-dark"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            key={key}
            value={prod.count}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons
              className="buttons-white"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
export default ShoppingPage;
