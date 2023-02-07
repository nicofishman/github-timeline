module.exports = {
    tabWidth: 4,
    useTabs: false,
    bracketSpacing: true,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    jsxSingleQuote: true,
    bracketSameLine: false,
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.js',
    overrides: [
        {
            files: '*.svg',
            options: {
                parser: 'html',
            },
        },
    ],
};
