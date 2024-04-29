import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    country: countryAndCapitalsList[0].country,
  }

  onSelectCapital = event => {
    const reqCountry = countryAndCapitalsList.find(
      each => each.id === event.target.value,
    )
    console.log(reqCountry)
    this.setState({
      country: reqCountry.country,
    })
  }

  render() {
    const {country} = this.state
    return (
      <div className="bg-container">
        <div className="capital-container">
          <h1>Countries and Capitals</h1>
          <select className="select-container" onChange={this.onSelectCapital}>
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country</p>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
