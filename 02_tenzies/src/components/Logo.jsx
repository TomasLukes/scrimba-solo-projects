import logo from '../assets/images/tenzies-logo-no-bg.png';

export default function Logo() {
  return (
    <div>
      <img className='logo__img' src={logo} alt="Logo of Tenzies" />
    </div>
  )
}