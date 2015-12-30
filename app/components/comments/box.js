'use strict';

import React       from 'react';
import CommentList from './list';
import CommentForm from './form';

const CommentBox = React.createClass({
    loadCommentsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    // Инициализация состояний
    getInitialState: function () {
        return {data: []};
    },

    /**
     * Метод вызываемый автоматически реактом при первой инициализации
     */
    componentDidMount: function () {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    render: function () {
        return (
            <div className='commentBox'>
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
});

export default CommentBox;