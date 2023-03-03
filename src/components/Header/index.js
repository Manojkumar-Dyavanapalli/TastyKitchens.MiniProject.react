import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="nav-bar">
      <Link to="/" className="nav-title-link">
        <div className="logo-container">
          <img
            src="https://i.postimg.cc/Nj9NVwWd/Group-7420hat.png"
            alt="website logo"
            className="nav-logo"
          />

          <h1 className="nav-title">Tasty Kitchens</h1>
        </div>
      </Link>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>

        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </ul>
    </div>
  )
}

export default withRouter(Header)
