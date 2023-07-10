import './index.css'

// Write your code here.
const WinOrLoseCard = props => {
  const {score, gameResult, maxScore, playAgain} = props
  const imgUrl =
    gameResult === 'Win'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultText = gameResult === 'Win' ? 'Won' : 'Lose'
  const scoreText = gameResult === 'Win' ? 'Best Score' : 'Score'
  const playGameAgain = () => {
    playAgain()
  }
  return (
    <div className="game-result-container">
      <div>
        <h1>You {resultText}</h1>
        <p>{scoreText}</p>
        <p>
          {score}/{maxScore}
        </p>
        <button type="button" onClick={playGameAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
