import './index.css'

// Write your code here.
const WinOrLoseCard = props => {
  const {score, gameResult, maxScore, playAgain} = props
  const imgUrl =
    gameResult === 'Win'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const playGameAgain = () => {
    playAgain()
  }
  return (
    <div className="game-result-container">
      <div>
        <h1>You {gameResult}</h1>
        <p>score</p>
        <p>
          {score} / {maxScore}
        </p>
        <button type="button" onClick={playGameAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imgUrl} alt="Game Result" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
