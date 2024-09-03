'use client';

import { v4 as uuidv4 } from 'uuid';
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
                    autoplay: true,
                    interval: 5000,
                    speed: 2500,
                    height: 646,
                }}
                aria-label='Homepage Slider'
            >
                <SplideSlide>
                    <Image
                        className='max-h-full object-cover object-top'
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
                        className='max-h-full object-cover object-top'
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
                        className='max-h-full object-cover object-top'
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

            <section className='mt-16'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[33px] font-semibold leading-[1.3]'>Shop The Latest</h2>
                    <Link className='text-accent text-xl font-semibol' href={'#'}>
                        View All
                    </Link>
                </div>
                <div className='flex justify-center flex-wrap mt-10 gap-y-[86px] gap-x-[54px]'>
                    {products.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export default HomePage;
