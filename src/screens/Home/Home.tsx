import {
    HeartSVG,
    LogoSVG,
    SearchSVG,
    ShoppingCartSVG,
    UserSVG
} from '@/shared/assets/icons'
import { paths } from '@/shared/config/roures'
import Link from 'next/link'
import React, { FC } from 'react'

interface IProps {}

const HomePage: FC<IProps> = ({}) => {
    return (
        <div className='flex-1 m-auto max-w-[1280px] px-4'>
            <header className='flex justify-between items-end bg-blackw-full h-[108px] border-b-2 border-b-light-gray'>
                <div className='pb-[14px]'><LogoSVG width={129} height={27} /></div>
                <nav className='flex items-end gap-x-12'>
                    <ul className='flex items-end gap-x-16'>
                        <li className='border-black border-b-2 py-[14px] text-h5'><Link href={paths.products()} className='text-black font-medium'>Shop</Link></li>
                        <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 py-[14px] text-h5'><Link href={paths.posts()} className='text-black font-medium'>Blog</Link></li>
                        <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 py-[14px] text-h5'><Link href={paths.about} className='text-black font-medium'>Our Story</Link></li>
                    </ul>
                    <span className='border-r-2 h-[18px] border-black self-center'/>
                    <ul className='flex items-end gap-x-9'>
                        <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 pb-[14px]'><Link href={'#'} className='bg-green-700 cursor-default'><SearchSVG width={20} height={20} /></Link></li>
                        <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 pb-[14px]'><Link href={paths.wishlist} className='bg-green-700 cursor-default'><HeartSVG  width={20} height={20} /></Link></li>
                        <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 pb-[14px]'><Link href={paths.shoppingCart} className='bg-green-700 cursor-default'><ShoppingCartSVG  width={20} height={20} /></Link></li>
                        <li className='border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 pb-[14px]'><Link href={paths.profile} className='bg-green-700 cursor-default'><UserSVG  width={20} height={20} /></Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default HomePage