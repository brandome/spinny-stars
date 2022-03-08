

const nextInt = (max) => {
    const _max = max || 16;
    return Math.round(Math.random() * 8008135) % max;
}

const nextIntensity = () => {
    return Math.round(Math.random()*10)/10;
}

const generateStars = ( reqCount ) => {
    const width = 800, height = 600;
    const count = (Number(reqCount) || 500);

    const stars = [];
    for (let i = 0; i < count; ++i) {
        stars.push({
            // id: `s-${i}`,
            x: nextInt(width),
            y: nextInt(height),
            i: nextIntensity()
        })
    }

    return {
        stars: stars
            .sort((a, b) => a.y > b.y ? 1 : a.y < b.y ? -1 : 0)
            .map((s, i) => {
                return {
                    ...s,
                    id: `s-${i}`
                };
            })
    };
}


const loadRandomStarChart = ( count ) => {
    
    return generateStars(count);

    // const reqCount = (Number(count) || 500);
    // const res = await fetch(`http://localhost:3000/stars?count=${reqCount}`);
    // return await res.json();
}

export default loadRandomStarChart;