import { Repo } from '../types/types';

export const getRepos = async (username: string | undefined) => {
    if (!username) {
        return [];
    }

    console.log(import.meta.env.VITE_GH_TOKEN);

    const repos = await fetch(
        `https://api.github.com/users/${username}/repos`,
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${import.meta.env.VITE_GH_TOKEN}`,
            },
        },
    );

    if (!repos.ok) {
        return [];
    } else {
        return (await repos.json()) as Repo[];
    }
};
