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
        <footer className='flex flex-col items-center h-auto lg:flex-row lg:items-end lg:h-40 justify-between border-t-2 border-t-light-gray'>
            <div className='mt-12 lg:mt-0'>
                <ul className='flex flex-col gap-y-3 justify-center items-center text-sm md:flex-row md:gap-x-10 lg:text-base'>
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
                <p className='mt-6 text-center md:mt-12 lg:text-left '>
                    © 2021 Shelly.{' '}
                    <Link href={paths.term} className='text-dark-gray'>
                        Terms of use
                    </Link>{' '}
                    and
                    <Link href={paths.term} className='text-dark-gray'>
                        privacy policy.
                    </Link>
                </p>
            </div>
            <div className='mt-6 lg:mt-0 pb-[10px] w-full max-w-[396px]'>
                <form className='relative w-full'>
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
                <ul className='flex justify-center lg:justify-end gap-x-[30px] mt-[50px]'>
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
            </div>
        </footer>
    );
};

export default Footer;
