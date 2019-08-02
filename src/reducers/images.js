import {ALL_IMAGES} from '../actions/actions'  

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_IMAGES:
      return action.payload.listsOfImages
    default:
      return state
  }
}