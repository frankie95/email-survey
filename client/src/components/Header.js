import React, { Component } from 'react'
import { connect } from 'react-redux'
class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return 'Still deciding'
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>
      default:
        return <li><a href="/api/logout">Logout</a></li>
    }
  }

  render () {
    console.log(this.props)
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='' className='left brand-logo'>
            Email Survey
          </a>
          <ul className='right'>
           {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToPops (state) {
  return { auth: state.auth }
}

export default connect(mapStateToPops)(Header)
