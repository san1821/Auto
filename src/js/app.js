  import React from 'react'
import { connect } from 'react-redux'

import Header from './header'
import APIStructureTester from './main'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <APIStructureTester apiMeta={this.props.apiMeta} />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    apiMeta: store.apiMeta
  }
}

export default connect(mapStateToProps)(App)