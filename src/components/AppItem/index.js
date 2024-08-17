import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  state = {
    inputValue: '',
    isClicked: false,
  }

  changeInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }
  start = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {inputValue, isClicked} = this.state
    return (
      <div className="editable-container">
        <div className="editable-input-container">
          <h1 className="editable-title">Editable Text Input</h1>
          {isClicked ? (
            <div className="input-text-container">
              <p className="input-text">{inputValue}</p>
              <button
                type="button"
                className="input-button"
                onClick={this.start}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="input-container">
              <input
                type="text"
                className="input-element"
                value={inputValue}
                onChange={this.changeInputValue}
              />
              <button
                type="button"
                className="input-button"
                onClick={this.start}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default AppItem
