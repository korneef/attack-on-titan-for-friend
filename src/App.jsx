import {useState, useEffect} from "react";
import './App.css'
import FlipCountdown from '@rumess/react-flip-countdown';


function App() {
  const [imageNumber, setImageNumber] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  console.log(imageNumber)

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
      <div key={imageNumber} className={`image-container bg-${imageNumber}`} />
      <div className={'time-wrapper'}>
        <div className='timer-description'>До начала просмотра "Атаки&nbsp;титанов" Адреем&nbsp;и&nbsp;Дашей</div>
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
