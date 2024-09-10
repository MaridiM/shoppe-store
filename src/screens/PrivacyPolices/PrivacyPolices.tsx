import { FC } from 'react';
import { Container } from '@/shared/components';

const PrivacyPolices: FC = () => {
    return (
        <Container className='flex-col m-auto pt-[36px] md:pt-[96px] max-w-[288px] sm:max-w-[400px] md:max-w-[671px]'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-[26px] md:text-[33px] text-start md:text-center font-medium md:font-semibold'>
                        Privacy Policy
                    </h1>
                    <p className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat,
                        augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex
                        vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                        Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum
                        sed.
                    </p>
                </div>
                <div className='flex flex-col gap-8'>
                    <h2 className='text-[20px] md:text-[26px] font-medium'>Security</h2>
                    <p className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat,
                        augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex
                        vitae libero. Sed quis mauris eget .
                    </p>
                </div>
                <div className='flex flex-col gap-8'>
                    <h2 className='text-[20px] md:text-[26px] font-medium'>Cookies</h2>
                    <ul className='px-[36px]'>
                        <li className='text-sm md:text-base list-disc'>
                            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
                            sollicitudin.
                        </li>
                        <li className='text-sm md:text-base list-disc'>
                            Nam fringilla molestie velit, eget pellentesque risus
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default PrivacyPolices;
