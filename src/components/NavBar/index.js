import './index.css'

// Write your code here.
const NavBar = props => {
  const {score, topScore, isGamePlayed} = props
  const getNavbar = () =>
    isGamePlayed ? null : (
      <div className="score-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {getNavbar()}
    </div>
  )
}

export default NavBar
