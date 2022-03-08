import { useEffect, useState } from "react";
import useWindowDimensions from '../utils/windowDimensions';
import loadRandomStarChart from '../utils/starChart';

import { Hexagon, Star } from './Shapes';

const StarMap = () => {

    const [stars, setStars] = useState([]);
    const [counter, setCounter] = useState(0);
    const scale = 2;
    const speed = 5;

    const [masterKey, setMasterKey] = useState(Math.random());

    const { width, height } = useWindowDimensions();

    const DURATION =18000;
    const COUNT = 100;

    const tick = () => setCounter(counter + 1);

     // re-render all stars on browser resize
    useEffect(() => {
        setMasterKey(Math.random());
        tick(); // restart animation

    }, [width, height]);

     // fetch new star positions
    useEffect(async () => {
        try {
            const { stars } = loadRandomStarChart(COUNT);
            setStars(stars);
        } catch (e) {
            console.log(e, 'error');
        }
    }, [counter]);

    // initial star chart
    useEffect(() => {
        setTimeout(() => tick(), 500);
    }, []); 
    
    // refresh star positions every DURATION ms
    useEffect(() => { 

        let timer1 = setInterval(() => tick(), DURATION);
        return () => {
          clearInterval(timer1);
        };

    }, [counter, DURATION]);

    return (<><svg id='starMap' width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="background" onClick={() => tick()} style={{
        background: 'black',
        position: 'absolute'
    }} />
        {
            stars && stars.map((star) => <svg key={star.id + masterKey} className={'heart star'} width={24} height={28} style={{
                fill:`transparent`,
                transition: `all linear ${DURATION*speed}ms`,
                stroke: `rgba(255,255,255, ${star.i * 3 / 2})`,
                strokeWidth: 2,
                position: 'absolute',
                transform: `translate(${star.x / 800 * width}px, ${star.y / 600 * height}px) scale(${star.i*scale})`
            }} >
                {Number(star.id.split("-")[1]) % 2 ? <Star /> : <Hexagon blur={3} />}
            </svg>
          )
        }
    </>);
}

export default StarMap;
