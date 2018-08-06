import React from 'react'

export default class Sidebar extends React.Component {
  render () {
    return (
      <div className='sidebar'>
        <div className='main-header'>API CHECKER</div>
        <div className='sidebar-item'>Normal APIs</div>
        <div className='sidebar-item'>Paginated APIs</div>
      </div>
    )
  }
}