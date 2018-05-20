import React from 'react'

export default class Main extends React.Component {
  render () {
    console.log(this.props.apiMeta)
    const data = this.props.apiMeta.map((apidata) => {
      return (
        <div>
          <div className='column'>{apidata.displayName}</div>
          <div className='column'>{apidata.url}</div>
          <div className='column'>{apidata.method}</div>
        </div>
      )
    })
    return (
      <div class='main-container'>
        <h1>Main</h1>
        {data}
      </div>
    )    
  }
}
