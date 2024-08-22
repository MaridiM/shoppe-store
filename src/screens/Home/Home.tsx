'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { FC, useEffect, useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { gold_big_hoops } from '@/shared/assets/img'

import '@splidejs/react-splide/css'
import './Home.css'
import { Header } from '@/widgets'

interface IProps {}

const HomePage: FC<IProps> = ({}) => {
    const splideRef = useRef<HTMLElement>(null)

    useEffect(() => {
        // console.log(splideRef.current)
    }, [])

    return (
        <div className='flex-1 m-auto max-w-[1280px] px-4'>
            <Header />

            <Splide
                onPaginationMounted={(splide: any) => {
                    const items = splide.Components.Pagination.items
                    console.log(items)
                    items.forEach((item: any, index: any) => {
                        console.log(item.li)
                        // item.button.textContent = String(index + 1)
                    })
                }}
                ref={splideRef}
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
                        className='rounded-md max-h-full object-cover object-top'
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
                        <button className='w-[193px] h-[53px] border-2 border-solid border-white text-white rounded-md text-h4 font-bold'>
                            View Product
                        </button>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <Image
                        className='rounded-md max-h-full object-cover object-top'
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
                        <button className='w-[193px] h-[53px] border-2 border-solid border-white text-white rounded-md text-h4 font-bold'>
                            View Product
                        </button>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <Image
                        className='rounded-md max-h-full object-cover object-top'
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
                        <button className='w-[193px] h-[53px] border-2 border-solid border-white text-white rounded-md text-h4 font-bold'>
                            View Product
                        </button>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default HomePage
