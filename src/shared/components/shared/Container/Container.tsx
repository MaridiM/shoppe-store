import { cn } from '@/shared/lib/utils';
import React, { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
    className?: string;
}

const Container: FC<IProps> = ({ children, className }) => {
    return (
        <div className={cn('flex flex-grow pb-[96px] md:pb-[250px]', className)}>{children}</div>
    );
};

export default Container;
