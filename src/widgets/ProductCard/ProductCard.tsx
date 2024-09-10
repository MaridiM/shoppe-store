'use client';

import { useAppContext } from '@/shared/lib/context';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/shared/components';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { useProductActions } from '@/shared/lib/hooks';

import { FC, useEffect, useMemo, useState } from 'react';
import { useProductStore } from '@/shared/lib/store';

interface IProps {
    id: number;
    img: StaticImageData;
    title: string;
    price: number;
}

const ProductCard: FC<IProps> = ({ id, img, title, price }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { cart, addToCart, removeFromCart, favorites, addToFavorite, removeFromFavorite } =
        useProductStore((state) => state);

    const isItemInCart = useMemo(() => cart.some((item) => item.id === id), [cart, id]);
    const isItemInFavorites = useMemo(
        () => favorites.some((item) => item.id === id),
        [favorites, id],
    );

    const handleCartClick = () => {
        isItemInCart ? removeFromCart(id) : addToCart({ id, img, title, price });
    };

    const handleFavoritesClick = () => {
        isItemInFavorites ? removeFromFavorite(id) : addToFavorite({ id, img, title, price });
    };

    return (
        mounted && (
            <div className='max-w-[380px] w-full'>
                <div className='relative group rounded-lg cursor-pointer'>
                    <Image src={img} alt='product' priority={true} />
                    <div className='absolute rounded-lg inset-0 flex items-center justify-center gap-x-[30px] opacity-0 bg-light-gray hover:opacity-60 shadow-md transition-opacity duration-300 group-hover:opacity-60'>
                        <Button onClick={handleCartClick} variant='icon' size='auto'>
                            <ShoppingCart
                                className={
                                    cart.some((item) => item.id === id)
                                        ? 'fill-black'
                                        : 'fill-transparent'
                                }
                                size={25}
                            />
                        </Button>
                        <Button variant='icon' size='auto'>
                            <Eye size={30} />
                        </Button>
                        <Button onClick={handleFavoritesClick} variant='icon' size='auto'>
                            <Heart
                                className={
                                    favorites.some((item) => item.id === id)
                                        ? 'fill-black'
                                        : 'fill-transparent'
                                }
                                size={25}
                            />
                        </Button>
                    </div>
                </div>
                <h2 className='mt-6 text-xl leading-[1.3]'>{title}</h2>
                <span className='inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize'>
                    $ {price.toFixed(2).replace('.', ',')}
                </span>
            </div>
        )
    );
};

export default ProductCard;
