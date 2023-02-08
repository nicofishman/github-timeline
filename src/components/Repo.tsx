import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { Repo as RepoType } from '../types/types';
import { randomHSLColor } from '../utilts/randomColor';

import ExternalUrl from './icons/ExternalUrl';

interface RepoProps {
    repo: RepoType;
    isFirst?: boolean;
    isLast?: boolean;
    color: ReturnType<typeof randomHSLColor>;
    zIndex: number;
    index: number;
}

const Repo = ({ repo, isFirst, isLast, color, zIndex, index }: RepoProps) => {
    const date = new Date(repo.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
    });

    const month = date.split(' ')[0];
    const year = date.split(' ')[1];

    return (
        <div
            className='flex w-full justify-center gap-x-3'
            style={{
                zIndex,
            }}
        >
            <motion.div
                animate={{ opacity: 1, x: 0 }}
                className='flex flex-1 flex-col items-end font-bebas text-4xl'
                initial={{ opacity: 0, x: -100 }}
                style={{
                    color: color.hsl,
                }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.5,
                    type: 'spring',
                    stiffness: 500,
                }}
            >
                <div className='text-4xl'>{year}</div>
                <div className='text-2xl'>{month}</div>
            </motion.div>
            <motion.div
                animate={{ opacity: 1, x: 0 }}
                className={clsx('relative h-44 w-6', {
                    'rounded-t-full': isFirst,
                    'rounded-b-full': isLast,
                })}
                initial={{ opacity: 0 }}
                style={{
                    backgroundColor: color.hsl,
                }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
            >
                {!isLast && (
                    <>
                        <div
                            className='absolute bottom-0 -ml-[25%] flex aspect-square w-[150%] translate-y-1/2 items-center justify-center rounded-full border-4 border-slate-700'
                            style={{
                                backgroundColor: color.hsl,
                            }}
                        >
                            <div className='aspect-square w-[45%] rounded-full bg-white shadow-lg drop-shadow-lg' />
                        </div>
                    </>
                )}
            </motion.div>
            <motion.div
                animate={{ opacity: 1, x: 0 }}
                className='flex max-h-[11rem] flex-[2_1_0%] flex-col'
                initial={{ opacity: 0, x: 200 }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.5,
                    type: 'tween',
                }}
            >
                <p
                    className='flex gap-x-4 font-bebas text-4xl'
                    style={{
                        color: color.hsl,
                    }}
                >
                    {repo.name}
                    <a href={repo.html_url} rel='noreferrer' target='_blank'>
                        <ExternalUrl />
                    </a>
                </p>
                <div className='overflow-y-hidden overflow-ellipsis font-bebas text-xl text-white/80'>
                    {repo.description}
                </div>
            </motion.div>
        </div>
    );
};

export default Repo;
