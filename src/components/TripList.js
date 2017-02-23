import React, { Component } from 'react'
import { connect } from 'react-redux'
import TripThumbnail from './TripThumbnail'



class TripList extends Component {
  render() {

    if (!this.props.currentTrips) {
      return (
        <div className="TripList fl w-20">
          <h1 className="TripListName tc">Login to make a &uarr; trip! </h1>
        </div>
      )
    }

    if (this.props.currentTrips) {
      var list = this.props.currentTrips.map(trip => <div><TripThumbnail trip = {trip}/></div>)
    }

    if (this.props.currentTrips) {
      return (
        <div className="TripList fl w-20">
          <h2 className="TripListName">{this.props.currentTrips}</h2>
          <ul>{list}</ul>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({}, dispatch)
// }

function mapStateToProps(state) {
  return {
    currentTrips: state.currentTrips
  }
}

export default connect(mapStateToProps)(TripList)
