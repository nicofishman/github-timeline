import { useRef } from 'react';

function Index() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className='flex h-screen w-full flex-col items-center justify-center bg-slate-700'>
            <div className='flex w-full max-w-xl flex-col gap-y-5'>
                <h1 className='mb-10 text-center font-bebas text-8xl text-yellow-200'>
                    MAKE YOUR OWN <br />
                    <span className='underline decoration-yellow-500 decoration-wavy underline-offset-[18px]'>
                        GITHUB TIMELINE
                    </span>
                </h1>
                <input
                    ref={inputRef}
                    className='rounded-md p-2 outline-none'
                    placeholder='Enter username...'
                />
                <button
                    className='rounded-md bg-gray-600 py-2 px-4 text-white transition-colors hover:bg-gray-500'
                    onClick={() => {
                        if (inputRef.current?.value === '') return;
                        window.location.href = `/repos/${inputRef.current?.value}`;
                    }}
                >
                    Generate timeline
                </button>
            </div>
        </div>
    );
}

export default Index;
