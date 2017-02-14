import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ParkThumbnail from './ParkThumbnail'
import { fetchParks } from '../actions/index.js'



class ParkList extends Component {

  componentDidMount(){
    this.props.fetchParks()
  }

  render() {
    var list = this.props.parks.map(park => <li><ParkThumbnail park = {park}/></li>)
    return (
      <div className="ParkList">
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchParks}, dispatch)
}

function mapStateToProps(state) {
  return {
    parks: state.parks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkList)