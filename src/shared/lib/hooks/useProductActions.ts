import { Dispatch, SetStateAction } from 'react';
import { StaticImageData } from 'next/image';

type Product = {
    id: number;
    img: StaticImageData;
    title: string;
    price: number;
};

type UseProductActions = (
    id: number,
    img: any,
    title: string,
    price: number,
    state: Product[],
    setState: Dispatch<SetStateAction<Product[]>>,
) => () => void;

const useProductActions: UseProductActions = (id, img, title, price, state, setState) => {
    const addRemoveProduct = () => {
        if (!state.some((item) => item.id === id)) {
            setState((prev) => [...prev, { id, img, title, price }]);
        } else {
            setState((prev) => prev.filter((item) => item.id !== id));
        }
    };
    return addRemoveProduct;
};

export default useProductActions;
