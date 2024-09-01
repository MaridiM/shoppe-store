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
        <footer className='flex justify-between items-end border-t-2 border-t-light-gray h-40'>
            <div>
                <ul className='flex gap-x-10'>
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
                <p className='mt-12'>
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
            <div className='pb-[10px] w-[396px]'>
                <form className='relative'>
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
                <ul className='flex justify-end gap-x-[30px] mt-[50px]'>
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
