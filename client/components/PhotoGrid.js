import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo'

//in order to get the actual element's key, you need to actually give it an i = {i} in React
const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
            </div>
        )
    }
});

export default PhotoGrid;