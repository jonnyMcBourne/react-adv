import { createContext, CSSProperties, ReactElement } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs } from "../interfaces/productInterfaces";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?:(arg:onChangeArgs)=>void;
  value?:number;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange,value }: Props) => {
  const { counter, increaseBy } = useProduct({product,onChange,value});
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
export default ProductCard;