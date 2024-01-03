// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, displaySuggestion} = props
  const {suggestion} = suggestionItem

  const onClickSuggestion = () => {
    displaySuggestion(suggestion)
  }

  return (
    <li className="list-card">
      <p className="para-text">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="suggestion-arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
