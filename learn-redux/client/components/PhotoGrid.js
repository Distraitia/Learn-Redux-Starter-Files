import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    // {JSON.stringify(this.props.posts, null, ' ')}
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
});

export default PhotoGrid;