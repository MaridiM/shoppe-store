import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { StaticImageData } from 'next/image';

import { produce } from 'immer';

interface Product {
    id: number;
    img: StaticImageData;
    title: string;
    price: number;
}

interface CartState {
    cart: Product[];
    favorites: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    addToFavorite: (product: Product) => void;
    removeFromFavorite: (id: number) => void;
}

const useProductStore = create<CartState>()(
    devtools(
        persist(
            (set) => ({
                cart: [],
                favorites: [],
                addToCart: (product) =>
                    set(
                        produce((state) => {
                            state.cart.push(product);
                        }),
                        false,
                        'product/addToCart',
                    ),
                removeFromCart: (id) =>
                    set(
                        (state) => ({ cart: state.cart.filter((item) => item.id !== id) }),
                        false,
                        'product/removeFromCart',
                    ),
                addToFavorite: (product) =>
                    set(
                        produce((state) => {
                            state.favorites.push(product);
                        }),
                        false,
                        'product/addToFavorite',
                    ),
                removeFromFavorite: (id) =>
                    set(
                        (state) => ({
                            favorites: state.favorites.filter((item) => item.id !== id),
                        }),
                        false,
                        'product/removeFromCart',
                    ),
            }),
            {
                name: 'cart-storage',
            },
        ),
    ),
);

export default useProductStore;
