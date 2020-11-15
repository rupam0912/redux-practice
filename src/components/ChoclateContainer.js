import React from 'react'
import { connect } from 'react-redux'
import { buyChoclate } from '../redux'

function ChoclateContainer (props) {
  return (
    <div>
      <h2>Number of choclates - {props.numOfChoclates} </h2>
      <button onClick={props.buyChoclate}>Buy Choclate</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfChoclates: state.choclate.numOfChoclates
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyChoclate: () => dispatch(buyChoclate())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoclateContainer)
