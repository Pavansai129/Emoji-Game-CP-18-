import './index.css'

// Write your code here.
const EmojiCard = props => {
  const {eachEmojiObj, updateScore} = props
  const {id, emojiName, emojiUrl} = eachEmojiObj
  const onSelectingEmoji = () => {
    updateScore(id)
  }
  return (
    <li className="emoji-card-item">
      <button type="button" className="emoji-card" onClick={onSelectingEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
