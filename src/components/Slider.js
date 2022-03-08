
const Slider = ({ speed, setSpeed }) => {

    return (<>
        <div class='slider-bg' style={{
            width: '100px',
            height: '1rem',
            position: 'absolute',
            background: 'rgba(255,255,255,.8'
        }}>
            <div class='slider' style={{
                width: '1rem',
                height: '2rem',
                background: 'gray',
                transform: `translateX(${speed * 100}px)`
            }}></div>
        </div>
    </>);

};

export default Slider;