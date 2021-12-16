import { useState } from "react";
import { Product } from '../interfaces/productInterfaces'
interface IProductInCart extends Product {
    count: number;
  }
  interface IonProductChange {
    count: number;
    product: Product;
  }
export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: IProductInCart }>({});
    const onProductCountChange = ({ count, product }: IonProductChange) => {
        setShoppingCart(prevProduct => {
            const productInCart: IProductInCart = prevProduct[product.id] || { count: 0, ...product };
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...prevProduct,
                    [product.id]: productInCart
                }
            }
            const { [product.id]: toDelete, ...rest } = prevProduct;
            return { ...rest };
        });

        /*
        setShoppingCart((prevCart) => {
          if (count === 0) {
            const { [product.id]: toDelete, ...rest } = prevCart;
            return rest;
          }
          return { ...shoppingCart, [product.id]: { count, ...product } };
        });
        */
    };
    return {onProductCountChange,shoppingCart}
}