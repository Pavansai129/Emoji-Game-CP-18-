import './index.css'

// Write your code here.
const NavBar = props => {
  const {score, topScore, isGamePlayed} = props
  const getNavbar = () =>
    isGamePlayed ? null : (
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="score">TopScore: {topScore}</p>
      </div>
    )
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p>Emoji Game</p>
      </div>
      {getNavbar()}
    </div>
  )
}

export default NavBar
