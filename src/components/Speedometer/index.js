// Write your code here
import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img-properties"
          alt="speedometer"
        />
        <h1 className="sub-heading">Speed is {count}mph</h1>
        <p className="sub-passage">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            onClick={this.onIncrement}
            className="btn-accelerate"
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.onDecrement}
            className="btn-break"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
