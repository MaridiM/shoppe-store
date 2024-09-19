'use client';

import { Container } from '@/shared/components';
import { FC } from 'react';
import { trends01 } from '@/shared/assets/img';
import { trends02 } from '@/shared/assets/img';
import Image from 'next/image';

const trendsProducts = [
    {
        id: 1,
        title: 'Top trends',
        img: trends01,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget.\n\n' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget.',
    },
    {
        id: 2,
        title: 'Produced with care',
        img: trends02,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget ',
    },
];

interface AboutProps {}

const AboutPage: FC<AboutProps> = ({}) => {
    return (
        <Container className='flex-col p-[16px] mx-auto'>
            <div className='max-w-[288px] md:max-w-[672px] mx-auto'>
                <h1 className='text-xl font-normal my-[39px] md:text-xxxl md:font-medium md:text-center md:mt-[96px] md:mb-0'>
                    About
                </h1>
                <p className='hidden md:block text-xl mt-[24px] mb-[46px] text-center'>
                    Who we are and why we do what we do!
                </p>
                <p className='text-s font-normal mb-[22px] md:text-base md:mb-[39px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue
                    a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae
                    libero. Sed quis mauris eget
                </p>
                {trendsProducts.map((item) => (
                    <div key={item.id}>
                        <h2 className='text-base font-normal mb-[13px] md:text-xxl md:mb-[23px]'>
                            {item.title}
                        </h2>
                        <Image
                            src={item.img}
                            alt='img'
                            className=' w-[288px] h-[200px] mb-[16px] md:mb-[48px] md:w-[670px] md:h-[300px] mx-auto'
                        />

                        {item.description.split('\n\n').map((paragraph, index) => (
                            <p
                                key={index}
                                className='text-s font-normal mb-[22px] md:text-base md:mb-[39px]'
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default AboutPage;
