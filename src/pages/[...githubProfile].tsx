import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import GoBack from '../components/icons/GoBack';
import Repo from '../components/Repo';
import { getRepos } from '../server/getRepos';
import { Repo as RepoType } from '../types/types';
import { randomHSLColor } from '../utilts/randomColor';

interface GithubProfileProps {}

const GithubProfile = ({}: GithubProfileProps) => {
    const { githubProfile } = useParams();
    const [repos, setRepos] = useState<RepoType[] | undefined>(undefined);

    if (!githubProfile) return null;

    useEffect(() => {
        (async () => {
            console.log('githubProfile', githubProfile);
            if (!githubProfile) return;
            const reposRes = await getRepos(githubProfile);

            setRepos(reposRes);
        })();
    }, [githubProfile]);

    return (
        <div className='flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-slate-700 text-white'>
            <motion.div
                animate={{ opacity: 1, y: 0 }}
                className='fixed top-5 left-5'
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            >
                <a className='font-bebas text-4xl' href='/'>
                    <GoBack />
                </a>
            </motion.div>
            <div className='flex w-full max-w-6xl flex-col items-center py-10'>
                {repos === undefined ? (
                    <div className='font-bebas text-4xl'>Loading...</div>
                ) : repos.length === 0 ? (
                    <div className='font-bebas text-4xl'>No repos found</div>
                ) : (
                    repos
                        .sort(
                            (a, b) =>
                                new Date(a.created_at).getTime() -
                                new Date(b.created_at).getTime(),
                        )
                        .map((repo, idx) => (
                            <Repo
                                key={repo.id}
                                color={randomHSLColor()}
                                index={idx}
                                isFirst={idx === 0}
                                isLast={idx === repos.length - 1}
                                repo={repo}
                                zIndex={repos.length - idx}
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default GithubProfile;
