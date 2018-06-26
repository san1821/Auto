import React from 'react'
import { connect } from 'react-redux'
import { runAll, runTest } from './actions'

import apiMeta from '../apiDetails/./apiManifest'

class APIStructureTester extends React.Component {
  constructor () {
    super()
    this.runAll = this.runAll.bind(this)
  }
  runAll() {
    runAll(this.props.dispatch)
  }
  render () {
    var self = this.props

    const data = apiMeta.map(function(apidata, i) {
      const response = self.testResponse && self.testResponse[apidata.id]
      return (
        <API apidata={apidata} dispatch={self.dispatch} response={response} key={i}/>
      )
    })

    return (
      <div className='main-container'>
        <div className='api-list'>
          <div className='api-list-content'>
            <div className='api-list-header'>
              <div className='column'>API Name</div>
              <div className='column'>API URL</div>
              <div className='column'>API Params</div>
              <div className='column'>API Method</div>
              <div className='column'>
                <button className='run-test-btn' onClick={this.runAll}>Run All Tests</button>
              </div>
            </div>
            {data}
          </div>
        </div>
      </div>
    )    
  }
}

const mapStateToProps = function (state) {
  return {
    testResponse: state.testResponse
  }
}

export default connect(mapStateToProps)(APIStructureTester)


class API extends React.Component {
  constructor (props) {
    super(props)
    this.runTest = this.runTest.bind(this) 
    this.all = this.all.bind(this)
    this.error = this.error.bind(this)
    this.state = {
      tab: 'error'
    }
  }
  runTest () {
    runTest(this.props.dispatch, {
      id: this.props.apidata.id
    })
  }
  all () {
    this.setState({tab: 'all'})
  }
  error () {
    this.setState({tab: 'error'}) 
  }
  render () {
    return (
      <div className='api-row'>
        <div className='column'>{this.props.apidata.displayName}</div>
        <div className='column'>{this.props.apidata.url}</div>
        <div className='column'>{JSON.stringify(this.props.apidata.params)}</div>
        <div className='column'>{this.props.apidata.method}</div>
        <div className='column'>
          <button className='run-test-btn' onClick={this.runTest}>Run Test</button>
        </div>
        {this.props.response &&
          <div className='tabs'>
            <div className='tab-header-container'>
              <div className={`tab-header ${this.state.tab === 'error' ? 'active': ''}`} onClick={this.error}>Error</div>
              <div className={`tab-header ${this.state.tab === 'all' ? 'active': ''}`} onClick={this.all}>All</div>
            </div>
            <div className={`result-tab-container ${this.state.tab}`}>
              { this.props.response && this.props.response.finalResult &&
                <ResultFormatter data={this.props.response.finalResult} />
              }
              { this.props.response && this.props.response.errorResult &&
                <ErrorResult data={this.props.response.errorResult} />
              }
            </div>
          </div>
        }
      </div>      
    )
  }
}


class ResultFormatter extends React.Component {
  render () {
    const rows = []
    for (let key in this.props.data) {
      const result = this.props.data[key]
      rows.push(
        <div className='result-row'>
          <div className='result-column fixed'>{key}</div>
          <div className={`result-column fixed ${result.found ? 'correct':'incorrect'}`}>{result.found ? 'True' : 'False'}</div>
          <div className='result-column fixed'>{result.typeExpected}</div>
          <div className={`result-column fixed ${result.typeMatched ? 'correct':'incorrect'}`}>{result.typeMatched ? 'True' : 'False'}</div>
          { !result.value && typeof(result.data) !== 'object' &&
            <div className='result-column fixed'>{result.data}</div>
          }
          { result.value && Array.isArray(result.value) &&
              result.value.map((item, i) => {
                return (
                  <div >
                    <div className='childName'>
                      Child {i}
                    </div>  
                    <ResultFormatter data={item} />
                  </div>
                )
              })
          }
          {result.value && !Array.isArray(result.value) &&
            <ResultFormatter data={result.value} />
          }
        </div>
      )
    }
    return (
      <div className='result-table'>
        <div className='result-row header'>
          <div className='result-column fixed'>Key Name</div>
          <div className='result-column fixed'>Found ?</div>
          <div className='result-column fixed'>Expected Type</div>
          <div className='result-column fixed'>Type Matched ?</div>
          <div className='result-column fixed'>Value</div>
        </div>
        {rows}
      </div>
    )
  }
}

class ErrorResult extends React.Component {
  render () {
    const content = this.props.data && this.props.data.map((item)=> {
      return (
        <div className='error'>
          <span>{item.path.join(" --> ")}</span> &nbsp;->&nbsp;
          <span>{item.message}</span>
        </div>
      )
    })
    return (
      <div className='error-result-container'>{content}</div>
    )
  }
}