import {useState, useEffect} from "react";
import './App.css'
import FlipCountdown from '@rumess/react-flip-countdown';
import cn from "classnames";
import image1 from './assets/images/1.jpg'
import image2 from './assets/images/2.jpg'
import image3 from './assets/images/3.jpg'
import image4 from './assets/images/4.jpg'
import image5 from './assets/images/5.jpg'
import image6 from './assets/images/6.jpg'


function App() {
  const [imageNumber, setImageNumber] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageNumber(prevState => {
        if(prevState < 6) return prevState + 1;
        return 1;
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <img className={cn(`image-container`, {['bg']: imageNumber === 1})} src={image1}/>
      <img className={cn(`image-container`, {['bg']: imageNumber === 2})} src={image2}/>
      <img className={cn(`image-container`, {['bg']: imageNumber === 3})} src={image3}/>
      <img className={cn(`image-container`, {['bg']: imageNumber === 4})} src={image4}/>
      <img className={cn(`image-container`, {['bg']: imageNumber === 5})} src={image5}/>
      <img className={cn(`image-container`, {['bg']: imageNumber === 6})} src={image6}/>

      <div className={'time-wrapper'}>
        <div className='timer-description'>До начала просмотра "Атаки&nbsp;титанов" Андреем&nbsp;и&nbsp;Дашей</div>
        <FlipCountdown
          size={windowWidth > 560 ? 'medium' : 'small'}
          titlePosition='bottom'
          className={'test'}
          hideYear
          hideMonth
          endAt={'2024-03-05 23:59:59'}
          endAtZero
        />
      </div>
    </div>
  )
}

export default App
