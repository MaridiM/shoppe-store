import { paths } from '@/shared/config/roures';
import Link from 'next/link';
import { FC } from 'react';

const NotFoundScreen: FC = () => {
    return (
        <div className='flex flex-1 justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-black font-black text-[33px] mb-6'>404 ERROR</h1>
                <div className='text-center mb-16'>
                    <p className='text-dark-gray text-[20px]'>This page not found;</p>
                    <p className='text-dark-gray text-[20px]'>back to home and start again</p>
                </div>

                <Link
                    href={paths.home}
                    className='text-base font-semibold text-primary border border-primary px-12 py-4 rounded-md opacity-100 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out'
                >
                    HOMEPAGE
                </Link>
            </div>
        </div>
    );
};

export default NotFoundScreen;
