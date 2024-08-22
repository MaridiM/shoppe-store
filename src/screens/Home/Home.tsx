'use client';

import { HeartSVG, LogoSVG, SearchSVG, ShoppingCartSVG, UserSVG } from '@/shared/assets/icons';
import gold_big_hoops from '@/shared/assets/img/slider/gold_big_hoops.jpg';
import img_01 from '@/shared/assets/img/products/img_01.jpg';
import { paths } from '@/shared/config/roures';
import Link from 'next/link';
import Image from 'next/image';
import React, { FC, useEffect, useRef } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Home.css';

interface IProps {}

const HomePage: FC<IProps> = ({}) => {
  const splideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // console.log(splideRef.current);
  }, []);

  return (
    <div className="flex-1 m-auto max-w-[1280px] px-4">
      <header className="flex justify-between items-end bg-blackw-full h-[108px] border-b-2 border-b-light-gray mb-4">
        <div className="pb-[14px]">
          <LogoSVG width={129} height={27} />
        </div>
        <nav className="flex items-end gap-x-12">
          <ul className="flex items-end gap-x-16">
            <li className="border-black border-b-2 py-[14px] text-base">
              <Link href={paths.products()} className="text-black font-medium">
                Shop
              </Link>
            </li>
            <li className="border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 py-[14px] text-base">
              <Link href={paths.posts()} className="text-black font-medium">
                Blog
              </Link>
            </li>
            <li className="border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 py-[14px] text-base">
              <Link href={paths.about} className="text-black font-medium">
                Our Story
              </Link>
            </li>
          </ul>
          <span className="border-r-2 h-[18px] border-black self-center" />
          <ul className="flex items-end gap-x-9">
            <li className="border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 pb-[14px]">
              <Link href={'#'} className="bg-green-700 cursor-default">
                <SearchSVG width={20} height={20} />
              </Link>
            </li>
            <li className="border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 pb-[14px]">
              <Link href={paths.wishlist} className="bg-green-700 cursor-default">
                <HeartSVG width={20} height={20} />
              </Link>
            </li>
            <li className="border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 pb-[14px]">
              <Link href={paths.shoppingCart} className="bg-green-700 cursor-default">
                <ShoppingCartSVG width={20} height={20} />
              </Link>
            </li>
            <li className="border-transparent hover:border-black transition-all delay-150 ease-in-out border-b-2 pb-[14px]">
              <Link href={paths.profile} className="bg-green-700 cursor-default">
                <UserSVG width={20} height={20} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Splide
        tag="section"
        options={{
          type: 'loop',
          arrows: false,
          autoplay: true,
          interval: 5000,
          speed: 2500,
          height: 646,
        }}
        aria-label="Homepage Slider"
      >
        <SplideSlide>
          <Image className="max-h-full object-cover object-top" src={gold_big_hoops} alt="img" />
          <div className="absolute top-56 left-10">
            <h1 className="mb-4 font-medium text-[33px] leading-[1.3] text-white">Gold big hoops</h1>
            <p className="mb-12 font-normal text-[26px] leading-[1.35] text-white">$ 68,00</p>
            <button className="w-[193px] h-[53px] border-2 border-solid border-white text-white rounded-md text-xl font-bold">
              View Product
            </button>
          </div>
        </SplideSlide>
        <SplideSlide>
          <Image className="max-h-full object-cover object-top" src={gold_big_hoops} alt="img" />
          <div className="absolute top-56 left-10">
            <h1 className="mb-4 font-medium text-[33px] leading-[1.3] text-white">Gold big hoops</h1>
            <p className="mb-12 font-normal text-[26px] leading-[1.35] text-white">$ 68,00</p>
            <button className="w-[193px] h-[53px] border-2 border-solid border-white text-white rounded-md text-xl font-bold">
              View Product
            </button>
          </div>
        </SplideSlide>
        <SplideSlide>
          <Image className="max-h-full object-cover object-top" src={gold_big_hoops} alt="img" />
          <div className="absolute top-56 left-10">
            <h1 className="mb-4 font-medium text-[33px] leading-[1.3] text-white">Gold big hoops</h1>
            <p className="mb-12 font-normal text-[26px] leading-[1.35] text-white">$ 68,00</p>
            <button className="w-[193px] h-[53px] border-2 border-solid border-white text-white rounded-md text-xl font-bold">
              View Product
            </button>
          </div>
        </SplideSlide>
      </Splide>
      <section className="mt-16">
        <div className="flex justify-between items-end">
          <h2 className="text-[33px] font-medium leading-[1.3]">Shop The Latest</h2>
          <Link className="text-accent font-medium" href={'#'}>
            View All
          </Link>
        </div>
        <div className="flex justify-center flex-wrap mt-10 gap-y-[86px] gap-x-[57px]">
          <div>
            <Image className="rounded-lg" src={img_01} alt="product" />
            <h2 className="mt-6 text-xl leading-[1.3]">Lira Earrings</h2>
            <span className="inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize">$ 20,00</span>
          </div>
          <div>
            <Image className="rounded-lg" src={img_01} alt="product" />
            <h2 className="mt-6 text-xl leading-[1.3]">Lira Earrings</h2>
            <span className="inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize">$ 20,00</span>
          </div>
          <div>
            <Image className="rounded-lg" src={img_01} alt="product" />
            <h2 className="mt-6 text-xl leading-[1.3]">Lira Earrings</h2>
            <span className="inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize">$ 20,00</span>
          </div>
          <div>
            <Image className="rounded-lg" src={img_01} alt="product" />
            <h2 className="mt-6 text-xl leading-[1.3]">Lira Earrings</h2>
            <span className="inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize">$ 20,00</span>
          </div>
          <div>
            <Image className="rounded-lg" src={img_01} alt="product" />
            <h2 className="mt-6 text-xl leading-[1.3]">Lira Earrings</h2>
            <span className="inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize">$ 20,00</span>
          </div>
          <div>
            <Image className="rounded-lg" src={img_01} alt="product" />
            <h2 className="mt-6 text-xl leading-[1.3]">Lira Earrings</h2>
            <span className="inline-block text-xl mt-4 font-medium text-accent leading-[1.3] capitalize">$ 20,00</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
