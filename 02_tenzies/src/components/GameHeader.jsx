import logo from '../assets/images/tenzies-logo-no-bg.png';

export default function GameHeader() {
  return (
    <div className='game-header__container'>

      <h2 className='game-header__title no-margin'>Welcome to</h2>

      <div className='flex'>
        <div className='game-header__logo-container flex'>
          <img className='game-header__logo-img' src={logo} alt="Logo of Tenzies" />
          <div className='game-header__info-container'>
            <svg className='game-header__info-icon' height="48" viewBox="0 0 48 48" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/></svg>
            <span className='game-header__info-icon-text'>Roll dice to get all same numbers.<br></br>Click a die to hold it, and keep rolling the rest until you win!</span>
          </div>
        </div>
      </div>

    </div>
  )
}