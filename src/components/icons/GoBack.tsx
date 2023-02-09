import clsx from 'clsx';
import React from 'react';

interface GoBackProps extends React.SVGAttributes<SVGElement> {}

const GoBack = ({ className, ...props }: GoBackProps) => {
    return (
        <svg
            className={clsx('scale-x-[-1]', className)}
            {...props}
            fill='none'
            height='46'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            width='46'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='m15 17 5-5-5-5' />
            <path d='M4 18v-2a4 4 0 0 1 4-4h12' />
        </svg>
    );
};

export default GoBack;
