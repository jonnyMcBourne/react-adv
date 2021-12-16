import {Props as IProduCard} from '../components/ProductCard';
import {Props as IProduImage} from '../components/ProductImage';
import {Props as IProdTitle} from '../components/ProductTitle';
import {Props as IProdButtons} from '../components/ProductButtons'

export interface Product{
    name:string;
    img:string;
    id: number;
}

export interface ProductContextProps{
  counter:number;
  increaseBy: (value:number)=>void
  product: Product;
}

export interface ProductCardHOCProps{
  ({ children, product }:IProduCard):JSX.Element,
  Title:    (Props: IProdTitle)   =>  JSX.Element,
  Image:    (Props: IProduImage)  => JSX.Element,
  Buttons:  (Props:IProdButtons)  =>  JSX.Element,
}

export interface onChangeArgs{
  product:Product;
  count:number;
}