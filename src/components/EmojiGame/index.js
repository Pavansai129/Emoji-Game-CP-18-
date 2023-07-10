import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isGamePlayed: false,
    gameResult: 'Loss',
    emojiIdsList: [],
  }

  updateScore = uniqueId => {
    const {emojiIdsList} = this.state
    const {emojisList} = this.props
    if (emojiIdsList.includes(uniqueId) === true) {
      this.setState(prevState => ({
        isGamePlayed: !prevState.isGamePlayed,
        gameResult: 'Loss',
      }))
    } else if (emojiIdsList.includes(uniqueId) === false) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        emojiIdsList: [...prevState.emojiIdsList, uniqueId],
      }))
    }
  }

  playAgain = () => {
    this.setState(prevState => ({
      isGamePlayed: !prevState.isGamePlayed,
      score: 0,
      emojiIdsList: [],
    }))
  }

  getEmojis = () => {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachEmojiObj => (
          <EmojiCard
            key={eachEmojiObj.id}
            eachEmojiObj={eachEmojiObj}
            updateScore={this.updateScore}
          />
        ))}
      </ul>
    )
  }

  getWinOrLoseComponent = () => {
    const {score, gameResult, emojiIdsList} = this.state
    const {emojisList} = this.props
    const maxScore = emojisList.length
    console.log(emojiIdsList)
    return (
      <WinOrLoseCard
        score={score}
        gameResult={gameResult}
        maxScore={maxScore}
        playAgain={this.playAgain}
      />
    )
  }

  render() {
    const {score, topScore, isGamePlayed} = this.state
    return (
      <div>
        <NavBar score={score} topScore={topScore} />
        <div className="emojis-bg-container">
          {isGamePlayed ? this.getWinOrLoseComponent() : this.getEmojis()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
