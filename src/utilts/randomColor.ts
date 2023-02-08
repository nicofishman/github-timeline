export const randomHSLColor = () => {
    const h = 360 * Math.random();
    const s = 25 + 70 * Math.random();
    const l = 85 + 10 * Math.random();
    const hsl = 'hsl(' + h + ',' + s + '%,' + l + '%)';

    return {
        h,
        s,
        l,
        hsl,
    };
};
