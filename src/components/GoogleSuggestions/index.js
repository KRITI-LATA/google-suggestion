// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {googleSearch: ''}

  searchUserInput = event => {
    this.setState({googleSearch: event.target.value})
  }

  displaySuggestion = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {googleSearch} = this.state
    const filterSearchResult = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-image"
          alt="google logo"
        />
        <div className="google-suggestion-search-card">
          <div className="google-logo-icon">
            <img
              className="icon-image"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />

            <input
              type="search"
              placeholder="Google Search"
              onChange={this.searchUserInput}
              className="google-suggestion-input"
              value={googleSearch}
            />
          </div>
          <ul className="list-container">
            {filterSearchResult.map(eachList => (
              <SuggestionItem
                suggestionItem={eachList}
                key={eachList.id}
                displaySuggestion={this.displaySuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
