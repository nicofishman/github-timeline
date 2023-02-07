import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='flex h-screen w-full flex-col items-center justify-center bg-red-500'>
            <div>
                <a href='https://vitejs.dev' rel='noreferrer' target='_blank'>
                    <img alt='Vite logo' className='logo' src='/vite.svg' />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className='card'>
                <button
                    onClick={() => {
                        setCount((count) => count + 1);
                    }}
                >
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default App;
