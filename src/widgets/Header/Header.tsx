'use client';

import Link from 'next/link';
import { FC } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

import { useProductStore } from '@/store';
import { LogoSVG, SearchSVG, UserSVG } from '@/shared/assets/icons';

import { paths } from '@/shared/config/roures';

interface IProps {}

const Header: FC<IProps> = ({}) => {
    const cart = useProductStore((state) => state.cart);
    const favorites = useProductStore((state) => state.favorites);

    const isAuth = false;

    return (
        <header className='flex justify-between items-end w-full h-[42px] border-b-2 border-b-light-gray mb-4'>
            <div className='pb-[14px]'>
                <Link href={paths.home}>
                    <LogoSVG width={129} height={27} />
                </Link>
            </div>
            <nav className='flex items-end gap-x-12'>
                <ul className='flex items-end gap-x-4'>
                    <li className='border-black border-b-2 py-[14px] text-h5 px-4'>
                        <Link href={paths.products()} className='text-black font-bold'>
                            Shop
                        </Link>
                    </li>
                    <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 py-[14px] text-h5 px-4'>
                        <Link href={paths.posts()} className='text-black font-medium'>
                            Blog
                        </Link>
                    </li>
                    <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 py-[14px] text-h5 px-4'>
                        <Link href={paths.about} className='text-black font-medium'>
                            Our Story
                        </Link>
                    </li>
                </ul>
                <span className='border-r-2 h-[18px] border-black self-center' />
                <ul className='flex items-end gap-x-2'>
                    <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 w-14 h-14'>
                        <Link
                            href={'#'}
                            className='cursor-default w-full h-full flex justify-center items-center'
                        >
                            <SearchSVG width={20} height={20} />
                        </Link>
                    </li>
                    <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 w-14 h-14 relative'>
                        <Link
                            href={paths.wishlist}
                            className='cursor-default w-full h-full flex justify-center items-center'
                        >
                            <Heart
                                size={20}
                                className={favorites.length ? 'fill-black' : 'fill-transparent'}
                            />
                        </Link>
                        {favorites.length > 0 && (
                            <div className='absolute top-5 -right-1 bg-black text-white rounded-md w-4 h-4 flex justify-center items-center'>
                                <span className='text-xs font-bold'>{favorites.length}</span>
                            </div>
                        )}
                    </li>
                    <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 w-14 h-14 relative'>
                        <Link
                            href={paths.shoppingCart}
                            className='cursor-default w-full h-full flex justify-center items-center gap-3'
                        >
                            <ShoppingCart
                                size={20}
                                className={cart.length ? 'fill-black' : 'fill-transparent'}
                            />
                        </Link>
                        {cart.length > 0 && (
                            <div className='absolute top-5 -right-1 bg-black text-white rounded-md w-4 h-4 flex justify-center items-center'>
                                <span className='text-xs font-bold'>{cart.length}</span>
                            </div>
                        )}
                    </li>
                    <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 w-14 h-14'>
                        <Link
                            href={isAuth ? paths.profile : paths.login}
                            className='cursor-default w-full h-full flex justify-center items-center'
                        >
                            <UserSVG width={20} height={20} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
