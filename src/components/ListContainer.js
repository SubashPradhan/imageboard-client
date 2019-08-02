import React from 'react'
import { getImages } from '../actions/actions'
import { connect } from 'react-redux'
import List from './List'

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages()
  }

  render() {
    console.log('hi', this.props)
    return(
    <List images={this.props.images} />
    )
  }
}
const mapsStateToProps = (state) => {
  return {
    images: state.images
  }
}
const mapdispatchToProps = { getImages }


export default connect(mapsStateToProps, mapdispatchToProps)(ListContainer)