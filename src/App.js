import React, { Component } from 'react'
import {connect} from 'react-redux'
import List from './components/List'
import ListContainer from './components/ListContainer';


class App extends Component {
  render() {
    return (
        <ListContainer />
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    images : state.images
  }
}

export default connect (mapStateToProps)(App)