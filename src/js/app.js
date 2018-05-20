import React from 'react'
import { connect } from 'react-redux'

import Header from './header'
import Main from './main'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Main apiMeta={this.props.apiMeta} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    apiMeta: store.apiMeta
    
  }
}

export default connect(mapStateToProps)(App)