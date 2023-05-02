import logo from '../assets/images/tenzies-logo-no-bg.png';


export default function Timer({ time }) {
  return (
    <div className='timer-container'>
      <img className='timer__logo-img' src={logo} alt="Logo of Tenzies" />
      <h2 className='timer__text'>Current time:</h2>
      <div className="count-up-timer" style={{ '--display-time': time }}>
        {time}
      </div>
    </div>
  );
}

/*
const CountUpTimer = ({ time }) => {
  const [displayTime, setDisplayTime] = useState(0);

  useEffect(() => {
    setDisplayTime(time);
  }, [time]);

  return (
    <div className="count-up-timer" style={{ '--display-time': displayTime }}>
      {displayTime}
    </div>
  );
};
*/
