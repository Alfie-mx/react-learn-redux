import React from 'react'
import Photo from './Photo'
import Comments from './Comments'


const Single = React.createClass({
    render(){

        // index of the post
        const idx = this.props.posts.findIndex( (post) => post.code === this.props.params.postId );

        // get the post
        const post = this.props.posts[idx];

        return (
            <div className="single-photo">
                <Photo idx={idx} post={post} {...this.props} />
                <Comments/>
            </div>
        )
    }
});

export default Single