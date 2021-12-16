import { useEffect, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/productInterfaces'

interface IuseProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void
    value?: number;
}
export const useProduct = ({ product, onChange, value = 0 }: IuseProductArgs) => {
    const [counter, setCounter] = useState(value);
    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue)
        onChange && onChange({ product, count: newValue });
    }
    useEffect(() => {
        setCounter(value);
    }, [value]);
    return { counter, increaseBy };
};