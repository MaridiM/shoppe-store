'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { Footer, Header } from '@/widgets';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Button, Container } from '@/shared/components';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import {
    gold_big_hoops,
    img_01,
    img_02,
    img_03,
    img_04,
    img_05,
    img_06,
} from '@/shared/assets/img';

import '@splidejs/react-splide/css';
import './Home.css';

interface IProps {}

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
                    <div className='max-w-[380px] w-full'>
                        <div className='relative group rounded-lg cursor-pointer'>
                            <Image src={img_01} alt='product' />
                            <div className='absolute rounded-lg inset-0 flex items-center justify-center gap-x-[30px] opacity-0 bg-light-gray hover:opacity-60 shadow-md transition-opacity duration-300 group-hover:opacity-60'>
                                <Button variant='icon' size='auto'>
                                    <ShoppingCart size={25} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Eye size={30} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Heart size={25} />
                                </Button>
                            </div>
                        </div>
                        <h2 className='mt-6 text-xl leading-[1.3]'>Lira Earrings</h2>
                        <span className='inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize'>
                            $ 20,00
                        </span>
                    </div>
                    <div className='max-w-[380px] w-full'>
                        <div className='relative group rounded-lg cursor-pointer'>
                            <Image src={img_02} alt='product' />
                            <div className='absolute rounded-lg inset-0 flex items-center justify-center gap-x-[30px] opacity-0 bg-light-gray hover:opacity-60 shadow-md transition-opacity duration-300 group-hover:opacity-60'>
                                <Button variant='icon' size='auto'>
                                    <ShoppingCart size={25} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Eye size={30} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Heart size={25} />
                                </Button>
                            </div>
                        </div>
                        <h2 className='mt-6 text-xl leading-[1.3]'>Lira Earrings</h2>
                        <span className='inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize'>
                            $ 20,00
                        </span>
                    </div>
                    <div className='max-w-[380px] w-full'>
                        <div className='relative group rounded-lg cursor-pointer'>
                            <Image src={img_03} alt='product' />
                            <div className='absolute rounded-lg inset-0 flex items-center justify-center gap-x-[30px] opacity-0 bg-light-gray hover:opacity-60 shadow-md transition-opacity duration-300 group-hover:opacity-60'>
                                <Button variant='icon' size='auto'>
                                    <ShoppingCart size={25} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Eye size={30} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Heart size={25} />
                                </Button>
                            </div>
                        </div>
                        <h2 className='mt-6 text-xl leading-[1.3]'>Lira Earrings</h2>
                        <span className='inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize'>
                            $ 20,00
                        </span>
                    </div>
                    <div className='max-w-[380px] w-full'>
                        <div className='relative group rounded-lg cursor-pointer'>
                            <Image src={img_04} alt='product' />
                            <div className='absolute rounded-lg inset-0 flex items-center justify-center gap-x-[30px] opacity-0 bg-light-gray hover:opacity-60 shadow-md transition-opacity duration-300 group-hover:opacity-60'>
                                <Button variant='icon' size='auto'>
                                    <ShoppingCart size={25} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Eye size={30} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Heart size={25} />
                                </Button>
                            </div>
                        </div>
                        <h2 className='mt-6 text-xl leading-[1.3]'>Lira Earrings</h2>
                        <span className='inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize'>
                            $ 20,00
                        </span>
                    </div>
                    <div className='max-w-[380px] w-full'>
                        <div className='relative group rounded-lg cursor-pointer'>
                            <Image src={img_05} alt='product' />
                            <div className='absolute rounded-lg inset-0 flex items-center justify-center gap-x-[30px] opacity-0 bg-light-gray hover:opacity-60 shadow-md transition-opacity duration-300 group-hover:opacity-60'>
                                <Button variant='icon' size='auto'>
                                    <ShoppingCart size={25} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Eye size={30} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Heart size={25} />
                                </Button>
                            </div>
                        </div>
                        <h2 className='mt-6 text-xl leading-[1.3]'>Lira Earrings</h2>
                        <span className='inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize'>
                            $ 20,00
                        </span>
                    </div>
                    <div className='max-w-[380px] w-full'>
                        <div className='relative group rounded-lg cursor-pointer'>
                            <Image src={img_06} alt='product' />
                            <div className='absolute rounded-lg inset-0 flex items-center justify-center gap-x-[30px] opacity-0 bg-light-gray hover:opacity-60 shadow-md transition-opacity duration-300 group-hover:opacity-60'>
                                <Button variant='icon' size='auto'>
                                    <ShoppingCart size={25} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Eye size={30} />
                                </Button>
                                <Button variant='icon' size='auto'>
                                    <Heart size={25} />
                                </Button>
                            </div>
                        </div>
                        <h2 className='mt-6 text-xl leading-[1.3]'>Lira Earrings</h2>
                        <span className='inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize'>
                            $ 20,00
                        </span>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default HomePage;
