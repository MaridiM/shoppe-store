import Link from 'next/link';
import { FC } from 'react';
import { MoveRight } from 'lucide-react';

import { paths } from '@/shared/config/roures';
import { Input } from '@/shared/components';
import { FacebookSVG, InstagramSVG, LinkedinSVG, TwitterSVG } from '@/shared/assets/icons';
import { Button } from '@/shared/components';

interface IProps {}

const Footer: FC<IProps> = () => {
    return (
        <footer className='flex flex-col h-auto justify-between border-t-2 border-t-light-gray lg:h-40'>
            <div className='flex flex-col gap-y-10 sm:mt-12 sm:items-center lg:flex-row lg:justify-between'>
                <ul className='flex flex-col order-1 gap-y-3 sm:items-center lg:justify-center text-sm lg:flex-row md:gap-x-10 lg:items-center lg:text-base lg:order-0'>
                    <li>
                        <Link href={paths.contact} className='leading-[1.69]'>
                            CONTACT
                        </Link>
                    </li>
                    <li>
                        <Link href={paths.term} className='leading-[1.69]'>
                            TERMS OF SERVICES
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className='leading-[1.69]'>
                            SHIPPING AND RETURNS
                        </Link>
                    </li>
                </ul>
                <form className='relative order-0 w-full max-w-[396px] lg:order-1'>
                    <Input
                        className='pr-8 border-black leading-[1.69] placeholder:text-dark-gray'
                        name='email'
                        type='email'
                        placeholder='Give an email, get the newsletter.'
                    />
                    <Button className='absolute right-0 top-4' variant='icon' size='auto'>
                        <MoveRight size={25} />
                    </Button>
                </form>
            </div>
            <div className='flex relative flex-col lg:flex-row lg:justify-between pb-[10px]'>
                <p className='absolute top-8 sm:hidden'>
                    Follow us <span className='inline-block bg-black w-10 h-[1px] ml-1 mb-1'></span>
                </p>
                <ul className='flex gap-x-5 pl-32 mt-8 sm:gap-x-[30px] sm:pl-0 sm:justify-center lg:justify-end lg:mt-[50px]'>
                    <li>
                        <Link href='#'>
                            <LinkedinSVG
                                width={20}
                                height={20}
                                className='transition-all duration-300 hover:fill-black'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <FacebookSVG
                                width={20}
                                height={20}
                                className='transition-all duration-300 hover:fill-black'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <InstagramSVG
                                width={20}
                                height={20}
                                className='transition-all duration-300 hover:fill-black'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <TwitterSVG
                                width={20}
                                height={20}
                                className='transition-all duration-300 hover:fill-black'
                            />
                        </Link>
                    </li>
                </ul>
                <p className='text-xs mt-6 sm:text-center md:mt-12 sm:text-base lg:text-left '>
                    © 2021 Shelly.{' '}
                    <Link href={paths.term} className='text-dark-gray'>
                        Terms of use
                    </Link>{' '}
                    and{' '}
                    <Link href={paths.term} className='text-dark-gray'>
                        privacy policy.
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
