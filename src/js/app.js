  import React from 'react'
import { connect } from 'react-redux'

import Header from './header'
import APIStructureTester from './main'

class App extends React.Component {
  render () {
    return (
      <div className= 'page-container'>
        <div className='detail-container'>
          List
        </div>
        <div className= 'list-container'>
          <Header />
          <APIStructureTester apiMeta={this.props.apiMeta} />
        </div>
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