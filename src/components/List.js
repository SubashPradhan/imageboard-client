import React, {Component} from 'react'
import images from '../reducers/images';

const RenderImages = ({images}) => {
  if(images && images.length > 0) {
    return images.map((image, index) => (
      <img src={image.URL} alt="Images" key={index} />
    ))
  }

  return (
    <p>Loading....</p>
  )
}

class List extends Component {
  render() {
    const {title, images} = this.props
    return (
      <div>
        <h3>{title}</h3>
        <div>
          <RenderImages images={images}/>
        </div>
      </div>
    )
  }
}

export default List