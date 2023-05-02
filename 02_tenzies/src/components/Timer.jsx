import '../assets/styles/timer.css';

export default function Timer({ time }) {
  return (
    <>
    <h2>Current time:</h2>

    <div className="count-up-timer" style={{ '--display-time': time }}>
      {time}
    </div>
    </>
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
