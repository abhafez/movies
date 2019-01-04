import React from 'react'

class ZeroState extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { message } = this.props
    return (
      <div className="zs-container">
        <i className="fa fa-film" aria-hidden="true" />
        <p class="display-2">{message ? 'No search results found' : ''}</p>
      </div>
    )
  }
}
export default ZeroState
