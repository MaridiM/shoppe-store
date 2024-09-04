'use client';

import { useAppContext } from '@/context';
import { useProductActions } from '@/hooks';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/shared/components';
import { Eye, Heart, ShoppingCart } from 'lucide-react';

import { FC } from 'react';

interface IProps {
    id: number;
    img: StaticImageData;
    title: string;
    price: number;
}

const ProductCard: FC<IProps> = ({ id, img, title, price }) => {
    const { cart, setCart, favorited, setFavorited } = useAppContext();

    const addRemoveProduct = useProductActions(id, img, title, price, cart, setCart);
    const addRemoveFavorite = useProductActions(id, img, title, price, favorited, setFavorited);

    return (
        <div className='max-w-[380px] w-full'>
            <div className='relative group rounded-lg cursor-pointer'>
                <Image src={img} alt='product' priority={true} />
                <div className='absolute rounded-lg inset-0 flex items-center justify-center gap-x-[30px] opacity-0 bg-light-gray hover:opacity-60 shadow-md transition-opacity duration-300 group-hover:opacity-60'>
                    <Button onClick={addRemoveProduct} variant='icon' size='auto'>
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
                    <Button onClick={addRemoveFavorite} variant='icon' size='auto'>
                        <Heart
                            className={
                                favorited.some((item) => item.id === id)
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
    );
};

export default ProductCard;
