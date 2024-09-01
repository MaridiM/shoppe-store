import Link from 'next/link';
import { LogoSVG, SearchSVG, HeartSVG, ShoppingCartSVG, UserSVG } from '@/shared/assets/icons';
import { paths } from '@/shared/config/roures';
import { FC } from 'react';

interface IProps {}

const Header: FC<IProps> = ({}) => {
    const isAuth = false;

    return (
        <header className='flex justify-between items-end bg-blackw-full h-[42px] border-b-2 border-b-light-gray mb-4 mt-12'>
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
                    <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 w-14 h-14'>
                        <Link
                            href={paths.wishlist}
                            className='cursor-default w-full h-full flex justify-center items-center'
                        >
                            <HeartSVG width={20} height={20} />
                        </Link>
                    </li>
                    <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 w-14 h-14'>
                        <Link
                            href={paths.shoppingCart}
                            className='cursor-default w-full h-full flex justify-center items-center'
                        >
                            <ShoppingCartSVG width={20} height={20} />
                        </Link>
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
