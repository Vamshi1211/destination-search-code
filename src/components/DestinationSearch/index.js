// Write your code here
import {Component} from 'react'
import DestinationItems from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchResults = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )
    // const getDestinationList = this.getDestination(destinationsList)
    return (
      <div className="bg-container">
        <h1 className="destination-search">Destination Search</h1>
        <div className="search-container">
          <input
            placeholder="Search"
            type="search"
            className="input-element"
            onChange={this.onChangeSearchResults}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="image"
          />
        </div>
        <ul className="destination-items-container">
          {searchResults.map(eachItem => (
            <DestinationItems
              eachDestinationItem={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
