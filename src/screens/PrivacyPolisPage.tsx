'use client'

import { FC } from "react";
import {Container} from '@/shared/components';




const PrivacyPolisPage: FC = () => {
    return (
        <Container className=' flex-col  px-[41px] py-[118px] sm:px-[144px] sm:pt-[118px] sm:pb-[96px] xl:px-[300px] xl:pt-[219px] xl:pb-[250px] '>
            <div className=''>
                <h1 className='mb-[39px] md:text-center text-xl md:text-h1'>Privacy Policy</h1>
                <p className='mb-[22px] md:mb-[39px] text-sm md:text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue
                    a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae
                    libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed
                    porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.
                </p>
                <h2 className='mb-[13px] md:mb-[24px] text-base md:text-h2'>Security</h2>
                <p className='mb-[22px] md:mb-[39px] text-sm md:text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue
                    a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae
                    libero. Sed quis mauris eget .
                </p>
                <h2 className='mb-[13px] md:mb-[24px]  text-base md:text-h2 '>Cookies</h2>
                <ul className=' text-sm md:text-base'>
                    <li className='list-disc'>
                        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin
                        ante a, gravida arcume scelerisque
                    </li>
                    <li className='list-disc'>
                        Nam fringilla molestie velit, eget pellentesque risus
                    </li>
                </ul>
            </div>
        </Container>
    );
}

export default PrivacyPolisPage;