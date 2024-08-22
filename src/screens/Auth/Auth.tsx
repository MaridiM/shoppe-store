import { FC } from 'react';
import Link from 'next/link';
import { Header } from '@/widgets';
import { paths } from '@/shared/config/roures';
import { Button, Checkbox, Input, Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components';
import { AtSign, UserRound, Phone, Lock } from 'lucide-react';

interface IProps {}

const SignInPage: FC<IProps> = ({}) => {
    return (
        <div className='flex flex-col min-h-screen m-auto max-w-[1280px] px-4'>
            <Header />
            <div className='flex justify-center flex-grow pt-[96px] pb-[248px]'>
                <div className='w-full max-w-[500px] mx-5'>
                    <h1 className='font-semibold text-3xl text-center mb-16'>My Account</h1>
                    <Tabs defaultValue='login' className='w-full'>
                        <TabsList className='mb-[60px] h-[60px] w-full bg-light-gray rounded-lg gap-[5px]'>
                            <TabsTrigger
                                className='text-xl font-medium w-full h-[50px] rounded-lg'
                                value='login'
                            >
                                Sign in
                            </TabsTrigger>
                            <TabsTrigger
                                className='text-xl font-medium w-full h-[50px] rounded-lg'
                                value='register'
                            >
                                Register
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value='login'>
                            <div className='flex flex-col gap-9 mb-4'>
                                <div className='flex justify-center items-center relative'>
                                    <AtSign
                                        className='absolute left-1 text-muted-foreground'
                                        size={16}
                                    />
                                    <Input
                                        className='pl-[28px]'
                                        name='email'
                                        type='email'
                                        placeholder='shoppe.store@gmail.com'
                                    />
                                </div>
                                <div className='flex justify-center items-center relative'>
                                    <Lock
                                        className='absolute left-1 text-muted-foreground'
                                        size={16}
                                    />
                                    <Input
                                        className='pl-[28px]'
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                    />
                                </div>
                            </div>
                            <div className='flex items-center gap-1 space-x-2'>
                                <Checkbox className='w-4 h-4' id='terms' />
                                <label
                                    htmlFor='terms'
                                    className='text-base leading-7 font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                >
                                    Remember me
                                </label>
                            </div>
                            <footer className='flex flex-col items-center font-medium gap-4 mt-[70px]'>
                                <Button size='lg' className='uppercase w-full rounded'>
                                    SIGN IN
                                </Button>
                                <Link className='font-base leading-7' href={paths.forgotPassword}>
                                    Have you forgotten your password?
                                </Link>
                            </footer>
                        </TabsContent>
                        <TabsContent value='register'>
                            <div className='flex flex-col gap-9 mb-4'>
                                <div className='flex justify-center items-center relative'>
                                    <UserRound
                                        className='absolute left-1 text-muted-foreground'
                                        size={16}
                                    />
                                    <Input
                                        className='pl-[28px]'
                                        name='first_name'
                                        type='text'
                                        placeholder='Antonio'
                                    />
                                </div>
                                <div className='flex justify-center items-center relative'>
                                    <UserRound
                                        className='absolute left-1 text-muted-foreground'
                                        size={16}
                                    />
                                    <Input
                                        className='pl-[28px]'
                                        name='last_name'
                                        type='text'
                                        placeholder='Banderas'
                                    />
                                </div>
                                <div className='flex justify-center items-center relative'>
                                    <UserRound
                                        className='absolute left-1 text-muted-foreground'
                                        size={16}
                                    />
                                    <Input
                                        className='pl-[28px]'
                                        name='login'
                                        type='text'
                                        placeholder='AntonioBanderos'
                                    />
                                </div>
                                <div className='flex justify-center items-center relative'>
                                    <AtSign
                                        className='absolute left-1 text-muted-foreground'
                                        size={16}
                                    />
                                    <Input
                                        className='pl-[28px]'
                                        name='email'
                                        type='email'
                                        placeholder='shoppe.store@gmail.com'
                                    />
                                </div>
                                <div className='flex justify-center items-center relative'>
                                    <Phone
                                        className='absolute left-1 text-muted-foreground'
                                        size={16}
                                    />
                                    <Input
                                        className='pl-[28px]'
                                        name='phone'
                                        type='tel'
                                        placeholder='+3880000005566'
                                    />
                                </div>
                                <div className='flex justify-center items-center relative'>
                                    <Lock
                                        className='absolute left-1 text-muted-foreground'
                                        size={16}
                                    />
                                    <Input
                                        className='pl-[28px]'
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                    />
                                </div>
                            </div>
                            <footer className='flex flex-col items-center font-medium gap-4 mt-[70px]'>
                                <Button size='lg' className='uppercase w-full rounded'>
                                    SIGN IN
                                </Button>
                                <Link className='font-base leading-7' href={paths.forgotPassword}>
                                    Have you forgotten your password?
                                </Link>
                            </footer>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
