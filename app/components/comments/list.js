'use strict';

import React   from 'react';
import Comment from './comment';

const CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                {this.props.data.map(comment => <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>)}
            </div>
        );
    }
});

export default CommentList;