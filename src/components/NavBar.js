import React from 'react'
import { Link } from 'react-router-dom'
import Greeting from './Greeting'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hiddenByClick: false
    }
    this.toggleBarVisibility = this.toggleBarVisibility.bind(this)
    this.hideShowMenu = this.hideShowMenu.bind(this)
  }

  toggleBarVisibility() {
    // Accessibility related
    let trigger = document.getElementById('toggler')
    trigger.getAttribute('aria-expanded') === 'false'
      ? trigger.setAttribute('aria-expanded', true)
      : trigger.setAttribute('aria-expanded', false)

    let expandable = document.getElementById('toggler')
    expandable.classList.toggle('collapse')
  }

  hideShowMenu() {
    this.toggleBarVisibility()
    this.setState(prevState => ({
      hiddenByClick: !prevState.hiddenByClick
    }))
  }

  render() {
    const { logOutUser, user } = this.props

    return (
      <nav className="navbar navbar-expand-lg navbar-light greeny">
        <Link className="navbar-brand" to="/">
          {/* <img src={ logo } alt="My Movies" /> */}
          <h1 id="logo" className="display-3">
            My Movies
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#toggler"
          aria-controls="toggler"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            className="navbar-toggler-icon"
            onClick={this.hideShowMenu}
            onKeyPress={this.hideShowMenu}
            onBlur={this.hideShowMenu}
          />
        </button>

        <div className="collapse navbar-collapse" id="toggler">
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SearchKeyword">
                Search By Keyword
              </Link>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                My Fav List
              </Link>
            </li>
          </ul> */}
          {this.props.user === null ? (
            <ul className="navbar-nav ml-auto">
              <li>
                <Link to="/login" className="nav-link signin">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          ) : (
            <Greeting userName={user.displayName} logOutUser={logOutUser} />
          )}
        </div>
      </nav>
    )
  }
}

export default NavBar
