import chefLogo from '../images/logo.png';

export default function Header() {
  return (
    <header>
      <img src={chefLogo} alt="Chefku logo" />
      <h1>Chefku</h1>
    </header>
  );
}
