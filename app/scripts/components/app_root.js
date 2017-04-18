import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'
import Shopping from './shopping_view.js'

class AppRoot extends React.Component {
  constructor (props) {
    super(props)
  }

  onHeaderClicked ({ history }) {
    return <h1 onClick={() => history.push('/contact-us')}>Whoa!</h1>
  }

  render () {
    return (
      <main>
        <Shopping />
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
