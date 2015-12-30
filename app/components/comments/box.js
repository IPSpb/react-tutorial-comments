'use strict';

import React       from 'react';
import CommentList from './list';
import CommentForm from './form';

const CommentBox = React.createClass({
    render: function () {
        return (
            <div className='commentBox'>
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        );
    }
});

export default CommentBox;