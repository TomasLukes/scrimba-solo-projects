export default function Timer({ time }) {
  return (
    <div className='timer__container'>
      <h2 className='timer__text'>Current time:</h2>
      <div className="timer__count-up" style={{ '--display-time': time }}>
        {time}
      </div>
    </div>
  );
}