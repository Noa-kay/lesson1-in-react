import flowerIcon from './flower-icon.svg'

function Header() {
  return (
    <header className="app-header">
      <img className="header-icon" src={flowerIcon} alt="פרח" />
      <h1 className="page-title">הגינה שלי</h1>
    </header>
  )
}

export default Header
