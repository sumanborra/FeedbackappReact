// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {displayPage: false}

  changePage = () => {
    
    this.setState({displayPage: true})
  }

  render() {
    const {resources} = this.props
    const {displayPage} = this.state
    const pageResdult = displayPage ? (
      <div>
        <img
          src={resources.loveEmojiUrl}
          alt="love emoji"
          className="love-imoji"
        />
        <h1 className="heading-emoji">Thank You!</h1>
        <p className="para-descriptionThankYou">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    ) : (
      <div>
        <h1 className="heading-emoji">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="list-container">
          {resources.emojis.map(each => {
            return (
              <li key={each.id}>
                <button
                  type="button"
                  className="buttn"
                  onClick={this.changePage}
                >
                  <img
                    src={each.imageUrl}
                    alt={each.name}
                    className="emoji-style"
                  />
                </button>
                <p className="para-description">{each.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
    return (
      <div className="background-container">
        <div className="card-container">{pageResdult}</div>
      </div>
    )
  }
}
export default Feedback
