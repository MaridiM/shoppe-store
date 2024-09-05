'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Container } from '@/shared/components';
import {
    gold_big_hoops,
    img_01,
    img_02,
    img_03,
    img_04,
    img_05,
    img_06,
} from '@/shared/assets/img';

import { ProductCard } from '@/widgets';

import '@splidejs/react-splide/css';
import './Home.css';

interface IProps {}

const products = [
    { id: 1, img: img_01, title: 'Lira Earrings', price: 20 },
    { id: 2, img: img_02, title: 'Lira Earrings', price: 30 },
    { id: 3, img: img_03, title: 'Lira Earrings', price: 20 },
    { id: 4, img: img_04, title: 'Lira Earrings', price: 20.43 },
    { id: 5, img: img_05, title: 'Lira Earrings', price: 20 },
    { id: 6, img: img_06, title: 'Lira Earrings', price: 20 },
];

const HomePage: FC<IProps> = ({}) => {
    return (
        <Container className='flex-col'>
            <Splide
                tag='section'
                options={{
                    type: 'loop',
                    arrows: false,
                    // autoplay: true,
                    interval: 5000,
                    speed: 2500,
                }}
                aria-label='Homepage Slider'
            >
                <SplideSlide>
                    <Image
                        className='object-cover object-top max-h-full'
                        src={gold_big_hoops}
                        alt='img'
                        priority={true}
                    />
                    <div className='absolute top-32 left-10 md:top-56'>
                        <h1 className='mb-4 font-medium text-2xl leading-[1.3] text-white md:text-[33px]'>
                            Gold big hoops
                        </h1>
                        <p className='mb-12 font-normal text-xl leading-[1.35] text-white md:text-[26px]'>
                            $ 68,00
                        </p>
                        <button className='w-40 h-10 text-base border-2 border-solid border-white text-white rounded-md font-bold md:text-xl md:w-[193px] md:h-[53px]'>
                            View Product
                        </button>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <Image
                        className='object-cover object-top max-h-full'
                        src={gold_big_hoops}
                        alt='img'
                        priority={true}
                    />
                    <div className='absolute top-56 left-10'>
                        <h1 className='mb-4 font-medium text-[33px] leading-[1.3] text-white'>
                            Gold big hoops
                        </h1>
                        <p className='mb-12 font-normal text-[26px] leading-[1.35] text-white'>
                            $ 68,00
                        </p>
                        <button className='w-[193px] h-[53px] border-2 border-solid border-white text-white rounded-md text-xl font-bold'>
                            View Product
                        </button>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <Image
                        className='object-cover object-top max-h-full'
                        src={gold_big_hoops}
                        alt='img'
                        priority={true}
                    />
                    <div className='absolute top-56 left-10'>
                        <h1 className='mb-4 font-medium text-[33px] leading-[1.3] text-white'>
                            Gold big hoops
                        </h1>
                        <p className='mb-12 font-normal text-[26px] leading-[1.35] text-white'>
                            $ 68,00
                        </p>
                        <button className='w-[193px] h-[53px] border-2 border-solid border-white text-white rounded-md text-xl font-bold'>
                            View Product
                        </button>
                    </div>
                </SplideSlide>
            </Splide>

            <section className='mt-16 w-full mx-auto'>
                <div className='flex justify-between items-center flex-col xl:flex-row'>
                    <h2 className='text-[33px] font-semibold leading-[1.3] mb-4 md:mb-0 md:text-[48px] md:leading-[1.2]'>
                        Shop The Latest
                    </h2>
                    <Link href={'#'} className='text-accent text-xl font-semibold md:mb-0'>
                        View All
                    </Link>
                </div>
                <div className='grid grid-cols-auto-fit-380 justify-center gap-[54px] mt-10'>
                    {products.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export default HomePage;
